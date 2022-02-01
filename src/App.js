import './App.css';
import { useState } from 'react';
// All other components will be exported here within the main component
import Expenses from './components/Expenses/Expenses.js'; 
import NewExpense from './components/NewExpense/NewExpense';
const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Soap',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses,setExpenses]=useState(Dummy_Expenses);
  function addExpenseHandler(expense){
    

    setExpenses(function (prevExpenses){
         return [expense,...prevExpenses];// in starting of array prevexpenses add a expense element
    });
  }
  
  return (
    <div className="App">
  
   <NewExpense onAddExpense={addExpenseHandler}/>
   {/* similar to attributes of html */}
    <Expenses expenses={expenses}></Expenses>
  
    </div>
  );
}

export default App;
