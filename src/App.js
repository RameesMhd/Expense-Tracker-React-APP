import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Expense 1",
    amount: 111.11,
    date: new Date(2023, 1, 1)
  },
  {
    id: 'e2',
    title: "Expense 2",
    amount: 222.22,
    date: new Date(2023, 2, 2)
  },
  {
    id: 'e3',
    title: "Expense 3",
    amount: 333.33,
    date: new Date(2023, 3, 3)
  },
  {
    id: 'e4',
    title: "Expense 4",
    amount: 444.44,
    date: new Date(2023, 4, 4)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
