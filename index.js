const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/b0a556e1d679438e8268560a/latest/${currencyFirstEl.value}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];

      // 1. Update the text display
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

      // 2. Update the second input (Moved inside the block)
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

currencyFirstEl.addEventListener("change" , updateRate)
currencySecondEl.addEventListener("change",updateRate)

worthFirstEl.addEventListener("input", updateRate)
