import './Card.css'

// children is not a attribute but it will be the value of content between opening and closing tag of custom component
// if you dont add this the content of card wont be visible
function Card(props){
    const classes='card '+props.className;
    return (
        
        <div className={classes}>{props.children}</div>
    );
}

export default Card;