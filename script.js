// Load data from localStorage or start empty
let tableEntries = JSON.parse(localStorage.getItem("expenses")) || [];

// Save data to localStorage
function saveData() {
localStorage.setItem("expenses", JSON.stringify(tableEntries));
}

// Format date (optional but cleaner display)
function formatDate(dateStr) {
  const date = new Date(dateStr);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

// Update summary (income, expense, balance)
function updateSummary() {
let totalIncome = 0;
let totalExpense = 0;

tableEntries.forEach(entry => {
if (entry.type === 1) {
totalIncome += entry.amount;
} else {
totalExpense += entry.amount;
}
});

updatedInc.innerText = totalIncome;
updatedExp.innerText = totalExpense;
updatedBal.innerText = totalIncome - totalExpense;
}

function getTotals() {
  let income = 0;
  let expense = 0;

  tableEntries.forEach(entry => {
    if (entry.type === 1) {
      income += entry.amount;
    } else {
      expense += entry.amount;
    }
  });

  return { income, expense };
}


// Add new item (with date)
function addItem() {
const type = Number(itemType.value);

const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");

const name = nameInput.value.trim();
const amount = Number(amountInput.value);
const date = dateInput.value;

// validation
if (name === "" || amount <= 0 || date === "") {
alert("Please fill all fields properly");
return;
}

const { income, expense } = getTotals();

// If it's an expense (type 0)
if (type === 0) {
  const newTotalExpense = expense + amount;

  if (newTotalExpense > income) {
    alert("Stop Your expenses! You are exceeding your income.");
    return;
  }
}

const today = new Date().toISOString().split("T")[0];

if (date > today) {
  alert("Future dates are not allowed");
  return;
}

const newEntry = {
id: Date.now(),
type: type,
name: name,
amount: amount,
date: date
};

tableEntries.push(newEntry);

saveData();
updateTable();

// reset inputs
nameInput.value = "";
amountInput.value = "";
dateInput.value = "";
}

// Load a single row
function loadItems(entry, index) {
const table = document.getElementById("table");
const row = table.insertRow();

row.innerHTML = `   <td>${index + 1}</td>    
                    <td>${entry.name}</td> 
                    <td>₹${entry.amount}</td>   
                    <td>${formatDate(entry.date)}</td> 
                    <td style="color: ${entry.type === 1 ? "green" : "red"}">

      ${entry.type === 1 ? "Income" : "Expense"}     </td>     <td>       <button onclick="deleteItem(${entry.id})">❌</button>     </td>
  `;
}

// Clear table before rendering
function clearTable() {
const table = document.getElementById("table");

table.innerHTML = `    
                  <tr class="titles">     
                  <th>#</th>    
                  <th>Name</th>    
                  <th>Amount</th>  
                  <th>Date</th>  
                  <th>Type</th>  
                  <th>Delete</th>  
                  </tr>
  `;
}

// Delete item
function deleteItem(id) {
tableEntries = tableEntries.filter(entry => entry.id !== id);

saveData();
updateTable();
}

// Re-render table + summary
function updateTable() {
clearTable();

tableEntries.forEach((entry, index) => {
loadItems(entry, index);
});

updateSummary();
}

// Initial load
updateTable();
document.getElementById("date").max = new Date().toISOString().split("T")[0];