window.addEventListener("load", main);

let selectedVat = 1.25;

function main() {
  addEventListeners();
}

/**
 * Get elements from DOM and add eventlisteners
 */
function addEventListeners() {
  const quarter = document.getElementById("quarter");
  const twelve = document.getElementById("twelve");
  const six = document.getElementById("six");

  quarter.addEventListener("click", applyVat25);
  twelve.addEventListener("click", applyVat12);
  six.addEventListener("click", applyVat6);

  const inclusiveInput = document.getElementById("inclusive");
  inclusiveInput.addEventListener("input", updateBasedOnIncVat);
}

/**
 * Calculate inclusive VAT function
 */
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

/**
 * Calculate exclusive VAT function
 */
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
  updateBasedOnExcVat();
}

function applyVat12() {
  selectedVat = 1.12;
  updateBasedOnIncVat();
  updateBasedOnExcVat();
}

function applyVat6() {
  selectedVat = 1.06;
  updateBasedOnIncVat();
  updateBasedOnExcVat();
}
