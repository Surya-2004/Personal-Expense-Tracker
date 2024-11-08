import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses, filter }) {
  const filteredExpenses = filter
    ? expenses.filter(expense => expense.category === filter)
    : expenses;

  const data = {
    labels: filteredExpenses.map(expense => expense.description),
    datasets: [
      {
        data: filteredExpenses.map(expense => expense.amount),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40', '#9966FF',
          '#4DC0C0', '#FF6384', '#FFCE56', '#FF9F40', '#36A2EB', '#9966FF'
        ],
        borderColor: '#333',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 bg-gray-800 p-4 rounded-lg shadow-md text-white">
      <h2 className="text-center text-xl font-semibold mb-4">Expense Breakdown</h2>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;
