# 💸 JavaScript Expense Tracker

A simple and interactive **Expense Tracker Web App** using JavaScript, HTML and CSS.
It allows users to manage their income and expenses with persistent storage using **localStorage**.

---

## 🚀 Features

- ➕ Add Income & Expense entries
- ❌ Delete transactions
- 📊 Real-time summary (Income, Expense, Balance)
- 💾 Data persistence using browser localStorage
- 📅 Date selection with validation (no future dates allowed)
- ⚠️ Prevent expenses exceeding total income
- 🔍 Filter transactions by date range
- 🔄 Auto-refresh UI after every update

---

## 🧠 Concepts Used

- DOM Manipulation
- Event Handling
- Array Methods
- localStorage
- Form Validation
- Date Handling in JavaScript

---

## Project Structure

```
 Expense Tracker
│── index.html
│── style.css
│── script.js
```

---

## How It Works

1. User enters:
   - Name
   - Amount
   - Date
   - Type (Income/Expense)

2. Data is:
   - Validated
   - Stored in an array (`tableEntries`)
   - Saved in **localStorage**

3. UI updates:
   - Table re-renders
   - Summary recalculates

---

## Data Storage

All data is stored in the browser using:

- Data remains even after refresh or browser restart
- No backend required

---

## Date Validation

- Future dates are restricted
- Max date is set dynamically:

---

## Expense Control Logic

Prevents overspending:

---

## Date Filter Feature

Users can filter transactions between selected dates:

- From Date
- To Date

Displays:

- Filtered entries
- Updated summary

---

## How to Run

1. Clone the repository:

```
git clone https://github.com/your-username/expense-tracker.git
```

2. Open `index.html` in your browser

---

## Learning Outcome

This project helps in understanding:

- Real-world CRUD operations
- State management without frameworks
- Data persistence in frontend apps

---

## Author

Manav
