// Selection of elements
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span");

// Functions
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const row = document.createElement("div");
    row.classList.add("row");

    row.innerHTML = `
      <div class="operation">${number} x ${i} =</div>
      <div class="result">${result}</div>
    `;

    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};

// Events
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});