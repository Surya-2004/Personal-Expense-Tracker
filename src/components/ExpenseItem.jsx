function ExpenseItem({ expense }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-700 p-4 mb-4 rounded shadow-sm">
      <div className="mb-2 sm:mb-0">
        <p className="font-semibold text-white">{expense.description}</p>
        <p className="text-sm text-gray-400">Category: {expense.category}</p>
      </div>
      <div className="text-green-400 font-semibold text-lg">{`$${expense.amount}`}</div>
    </div>
  );
}

export default ExpenseItem;
