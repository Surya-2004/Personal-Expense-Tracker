import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-center text-xl font-semibold mb-4">Expense List</h2>
      {expenses.map((exp, index) => (
        <ExpenseItem key={index} expense={exp} />
      ))}
    </div>
  );
}

export default ExpenseList;
