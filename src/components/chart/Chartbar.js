import react from "react";

import './Chartbar.css'

function Chartbar(props){
    let barFillheight='0%';
    if(props.max>0){
        barFillheight=Math.round((props.value/props.max)*100)+'%'
    }
    return(
         <div className="chart-bar">
        <div className="chart-bar__inner">
        {/* style is not same in jsx as in html you have to render it dynamically so we use braces // now each of the style component is rendered
        as js objects so another curly braces and they are key value pair so in the key part either use camelcasing or inverted commas*/ }
            <div className="chart-bar__fill" style={{height:barFillheight}}>

            </div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
    )
}



export default Chartbar