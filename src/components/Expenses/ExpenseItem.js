import React,{useState} from 'react';
import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/card.js'
// we dont use multiple prameters in react instead use one i.e props

function ExpenseItem(props) {
  
  //it returns two things a special variable that stores the variable to be changed and the updating fnctn
  const [title, setTitle]=useState(props.title);
  
  //let title=props.title
   function clickHandler(){

   setTitle("Updated!");
   // on changing title by following method the title wont change because this click wont trigger the comp fnctn to run again so we have to use reacts hooks its a react fnctn nameduseSstate
   //title="Updated!"
   }
   
     return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}></ExpenseDate>
   
    <div className="expense-item__description">
    
      <h2>{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change title</button>
  </Card>
  
  );
}

export default ExpenseItem;
