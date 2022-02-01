import React, { useState } from "react";
import "./ExpenseForm.css";


function ExpenseForm(props) {
 


    // multistate
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

    function submitHandler(event){
        event.preventDefault();// usually page reloads on submission// it prevents from reloading
        const expenseData={
        title:enteredTitle,
        amount:+enteredAmount,
        date :new Date(enteredDate)
    };
    console.log("Expenseform")
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    // in order to clear input of the form
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('')
}
// single state 
//const[userInput,setInput]=useState(
   // enteredTitle=' ',
    //enteredAmount=' ',
   // enteredDate=' '
//);
  function titleChangeHandler(event) {
      // singlestate
     // setEnteredTitle(
       //   ...userInput, // for every state you have to pass so we use spread operator
         // enteredTitle=event.target.value
      //)
      //multi state
    setEnteredTitle(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  return (
      
    <form onSubmit={submitHandler}>
    
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
