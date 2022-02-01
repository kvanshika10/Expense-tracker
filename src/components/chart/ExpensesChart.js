import React from "react";

import Chart from "./Chart";

function ExpensesChart(props){
    const chartDatapoints=[
        {label:'Jan' ,value:0},
        {label:'Feb' ,value:0},
        {label:'Mar' ,value:0},
        {label:'Apr' ,value:0},
        {label:'May' ,value:0},
        {label:'Jun' ,value:0},
        {label:'Jul' ,value:0},
        {label:'Aug' ,value:0},
        {label:'Sep' ,value:0},
        {label:'Oct' ,value:0},
        {label:'Nov' ,value:0},
        {label:'Dec' ,value:0}
        ]
    for(const expense of props.expenses ){
     const ExpenseMonth=expense.date.getMonth();
     chartDatapoints[ExpenseMonth].value+=expense.amount; // janwill return 0
    }
return <Chart  dataPoints={chartDatapoints}></Chart>
}

export default ExpensesChart