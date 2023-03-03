import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2023, 2, 3);
    const expenseTitle = 'Chick Fil A';
    const expenseAmount = 25.00;
  return (
    <div className='expense-item'>
    <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
