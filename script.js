window.addEventListener('load', main);

function main() {
  addEventListeners();
}

function addEventListeners() {
  const quarter = document.getElementById('quarter');
  const twelve = document.getElementById('twelve');
  const six = document.getElementById('six');
  const zero = document.getElementById('zero');

  quarter.addEventListener('click', calculateQuarter);
}

function calculateQuarter() {
  console.log('25')
}