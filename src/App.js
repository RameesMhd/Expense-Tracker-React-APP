import React from 'react';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
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
  // Older way of writing react code 
  // For this always needs to import React in the top 

  // return React.createElement(
  //   'div', { class: 'App' },
  //   React.createElement(
  //     Expenses, { items: expenses }
  //   )
  // )
  return (
    <div className="App">
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
