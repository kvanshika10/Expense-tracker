import "./Expenses.css";
import Card from "../UI/card.js";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "../chart/ExpensesChart";
function Expenses(props) {
  const style = {
    color: 'white',
    textAlign:'center',
    fontWeight:'bold'
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  function onFilterHandler(year) {
    setFilteredYear(year);
  }
// filter in order to display acc to year
  const filteredArray = props.expenses.filter(function (expenses) {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p style={style}>NO Expenses Found!</p>;
  {
    if (filteredArray.length > 0) {
      expensesContent = filteredArray.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ));
    }
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilter={onFilterHandler}
        ></ExpensesFilter>
        {/* now with the help of <EXpense item we are able to extract the given list only but with the help of new expenses we are adding a new item also that wont be dynamically render so in o
   rder to obtain that we will have to dynamically render that for that we use map above*/}
   <ExpensesChart expenses={filteredArray}></ExpensesChart>
        {expensesContent}

        {/*<ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem> 
    <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem> 
    <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem> 
    <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expenses;
