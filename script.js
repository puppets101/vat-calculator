window.addEventListener("load", main);

let selectedVat = 1.25;

function main() {
  addEventListeners();
}

function addEventListeners() {
  // Get buttons from DOM
  const quarter = document.getElementById("quarter");
  const twelve = document.getElementById("twelve");
  const six = document.getElementById("six");
  // const zero = document.getElementById('zero');

  // Get input from DOM
  const inclusive = document.getElementById("inclusive");
  const exclusive = document.getElementById("exclusive");
  const total = document.getElementById("total");

  const inclusiveInput = document.getElementById("inclusive");
  inclusiveInput.addEventListener("input", updateBasedOnIncVat);
}

function updateBasedOnIncVat() {
  const inclusiveInput = document.getElementById("inclusive");
  const exclusiveInput = document.getElementById("exclusive");
  const totalInput = document.getElementById("total");

  const inclusiveVat = Number(inclusiveInput.value);
  console.log(inclusiveVat);

  const exclusiveVat = inclusiveVat / selectedVat;
  const totalVat = inclusiveVat - exclusiveVat;

  exclusiveInput.value = String(exclusiveVat);
  totalInput.value = String(totalVat);
  console.log(exclusiveVat);
  console.log(totalVat);
}
