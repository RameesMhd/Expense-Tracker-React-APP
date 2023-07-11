import './ExpenseForm.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
    };
    // Lifting the state UP
    // its about moving data from a child component to parent component
    // to either use it their or passing to another component

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};
export default NewExpense;