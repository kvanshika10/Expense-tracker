import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react/cjs/react.development';






// after you take a i/p  from expense form you have to add that in expenses array in app js i.e you have to pas data from child comp to parent comp
// expenseform->newexpense->app

function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseData){
        console.log(enteredExpenseData);
        //app.js
        props.onAddExpense(enteredExpenseData);
        setEditingHandler(false);
        
    }
   // in order to show and hide button we have to change the state
   const[isEditing,setEditingHandler]=useState(false);
    function onEditingHandler(){
        // if isEditing false button is displayed otherwise form is displayed
        setEditingHandler(true);
    }

    function stopEditingHandler(){
        setEditingHandler(false);
    }

    return(
        <div className="new-expense">
        {/*instead of if statement && is used if the condition before&& is true then the condition after& is rendered*/}
        {!isEditing&&<button onClick={onEditingHandler} >Add new Expense</button>}
           {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
            </div>
    );

}

export  default NewExpense