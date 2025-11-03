const URL = "https://open.er-api.com/v6/latest/";
const selects = document.querySelectorAll(".currency select");
const to = document.querySelector(".to select");
const from = document.querySelector(".from select");
const result = document.getElementById("result");
const images = document.querySelectorAll("img");
const amounts = document.querySelector("input");
const updateResult = async () => {
  const toSelect = document.querySelector(".to select").value;
  const fromSelect = document.querySelector(".from select").value;
  const fullUrl = URL + fromSelect;
  let response = await fetch(fullUrl);
  let data = await response.json();
  images[0].src =
    "https://flagsapi.com/" + countryList[fromSelect] + "/flat/64.png";
  images[1].src =
    "https://flagsapi.com/" + countryList[toSelect] + "/flat/64.png";
  const rate = data["rates"][toSelect];
  const amount = amounts.value;
  const resultSpan = document.createElement("p");
  resultSpan.innerText =
    amount +
    " " +
    fromSelect +
    " = " +
    parseFloat(amount) * parseFloat(rate) +
    " " +
    toSelect;
  result.innerText = "";
  result.append(resultSpan);
};

for (let dropdown of selects) {
  for (country in countryList) {
    let option = document.createElement("option");
    option.value = country;
    option.innerText = country;
    if (dropdown.name === "from" && country == "USD") {
      option.selected = "selected";
    } else if (dropdown.name === "to" && country === "PKR") {
      option.selected = "selected";
    }
    dropdown.append(option);
  }
}
updateResult();

to.onchange = updateResult;
from.onchange = updateResult;
amounts.oninput = updateResult;
