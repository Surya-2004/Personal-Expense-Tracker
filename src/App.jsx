import { useState } from "react";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("");
  const [showChart, setShowChart] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((exp) =>
    filter ? exp.category === filter : true
  );

  const totalExpenditure = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      
      <div className="mt-6 text-lg font-semibold">
        Total Expenditure:{" "}
        <span className="text-green-400">${totalExpenditure}</span>
      </div>
      
      <div className="mt-4">
        <select
          className="mt-2 bg-gray-800 text-white border border-gray-700 rounded p-2 outline-none focus:border-blue-400"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Bills">Bills</option>
        </select>
      </div>
      
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
        onClick={() => setShowChart(!showChart)}
      >
        {showChart ? "Hide Chart" : "Show Chart"}
      </button>
      
      {showChart && (
        <div className="mt-6 w-full flex flex-col sm:flex-row justify-center sm:space-x-8">
          <div className="w-full max-w-3xl mb-6 sm:mb-0">
            <ExpenseChart expenses={expenses} filter={filter} />
          </div>
          <div className="w-full max-w-3xl">
            <ExpenseList expenses={filteredExpenses} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
