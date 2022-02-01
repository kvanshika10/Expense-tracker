import React from "react";
import './Chart.css';
import Chartbar from './Chartbar.js'

function Chart(props){
    const dataPointValues=props.dataPoints.map(datapoint=>datapoint.value);

    const maxValue=Math.max(...dataPointValues);// convert array into individual values
    return(  <div className="chart">
    {/*to change the elements of array map is used 
    here key is used to uniquely identify every element*/ }
        {props.dataPoints.map(datapoint=>(
            <Chartbar 
            key={datapoint.label} 
            value={datapoint.value}
             max={maxValue}
             label={datapoint.label}
             >
             </Chartbar>
        ))}
    </div>
    )
}





export default Chart