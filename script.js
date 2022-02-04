"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

const liste = document.querySelector("#results");

// inspiration:
// https://ricardometring.com/getting-the-value-of-a-select-in-javascript

function settingUp() {
  liste.textContent = "";

  // Do cal function on click
  document.querySelector("#calculate").addEventListener("click", doCalculation);
  // Clear result list on click
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function doCalculation() {
  console.log("doCalculation");

  // Read input value (top/bottom):
  let topNumberValue = document.querySelector("#firstnumber").value;
  let bottomNumberValue = document.querySelector("#secondnumber").value;

  // Read operator value:
  let select = document.getElementById("operator");
  let text = select.options[select.selectedIndex].text;

  // Get result:
  let outputs = `Number(topNumberValue) ${text} Number(bottomNumberValue)`;
  let result = eval(outputs);

  console.log(result);

  // display result in top input:
  document.querySelector("#firstnumber").value = result;

  let selectElement = document.querySelector("#decimals");
  let output = selectElement.value;
  let n = result.toFixed(output);

  // Check field and round if nessesary
  if (document.getElementById("doround").checked) {
    document.querySelector("#firstnumber").value = n;
    topNumberValue = n;
  } else {
    console.log("not checked");
  }

  // display result in list:
  topNumberValue = result;

  const node = document.createElement("li");
  const textnode = document.createTextNode(n);
  node.appendChild(textnode);
  document.getElementById("results").appendChild(node);

  // Make list scroll to bottom
  liste.scrollTop = liste.scrollHeight;
}

function clearResults() {
  console.log("clearResults");

  liste.textContent = "";
  document.querySelector("#firstnumber").value = "";
  document.querySelector("#secondnumber").value = "";
}
