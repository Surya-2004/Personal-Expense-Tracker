import { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description && category) {
      addExpense({ amount: parseFloat(amount), description, category });
      setAmount('');
      setDescription('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 shadow-md rounded text-gray-200">
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Amount"
        className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description"
        className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" className="text-gray-500">Select Category</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
      </select>
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded transition duration-300"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
