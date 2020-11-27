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

  quarter.addEventListener("click", applyVat25);
  twelve.addEventListener("click", applyVat12);

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

  const exclusiveVat = inclusiveVat / selectedVat;
  const totalVat = inclusiveVat - exclusiveVat;

  exclusiveInput.value = String(exclusiveVat);
  totalInput.value = String(totalVat);
}

function updateBasedOnExcVat() {
  const inclusiveInput = document.getElementById("inclusive");
  const exclusiveInput = document.getElementById("exclusive");
  const totalInput = document.getElementById("total");

  const exclusiveVat = Number(exclusiveInput.value);
  const inclusiveVat = exclusiveVat * selectedVat;
  const totalVat = inclusiveVat - exclusiveVat;

  inclusiveInput.value = String(inclusiveVat);
  totalInput.value = String(totalVat);
}

function applyVat25() {
  selectedVat = 1.25;
  updateBasedOnIncVat();
}

function applyVat12() {
  selectedVat = 1.12;
  updateBasedOnExcVat();
}
