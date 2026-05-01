let tableEntries = JSON.parse(localStorage.getItem("expenses")) || [];

// Save to localStorage
function saveData() {
localStorage.setItem("expenses", JSON.stringify(tableEntries));
}

// Update Summary
function updateSummary() {
let totalIncome = 0;
let totalExpense = 0;

tableEntries.forEach(e => {
if (e.type === 1) totalIncome += e.amount;
else totalExpense += e.amount;
});

updatedInc.innerText = totalIncome;
updatedExp.innerText = totalExpense;
updatedBal.innerText = totalIncome - totalExpense;
}

// Add Item
function addItem() {
let type = Number(itemType.value);
let name = document.getElementById("name").value;
let amount = Number(document.getElementById("amount").value);

if (!name || amount <= 0) {
alert("Enter valid data");
return;
}

const newEntry = {
id: Date.now(),   // 🔥 unique ID
type,
name,
amount
};

tableEntries.push(newEntry);

saveData();
updateTable();

document.getElementById("name").value = "";
document.getElementById("amount").value = "";
}

// Load Items
function loadItems(e, i) {
let table = document.getElementById("table");
let row = table.insertRow();

row.innerHTML = `     <td>${i + 1}</td>     <td>${e.name}</td>     <td>₹${e.amount}</td>     <td style="color:${e.type === 1 ? 'green' : 'red'}">
      ${e.type === 1 ? "⬆ Income" : "⬇ Expense"}     </td>     <td>       <button onclick="deleteItem(${e.id})">❌</button>     </td>
  `;
}

// Clear table
function clearTable() {
let table = document.getElementById("table");
table.innerHTML = `     <tr class="titles">       <th>#</th>       <th>Name</th>       <th>Amount</th>       <th>Type</th>       <th>Delete</th>     </tr>
  `;
}

// Delete item
function deleteItem(id) {
tableEntries = tableEntries.filter(e => e.id !== id);
saveData();
updateTable();
}

// Update Table
function updateTable() {
clearTable();
tableEntries.forEach((e, i) => loadItems(e, i));
updateSummary();
}

// Initial Load
updateTable();
