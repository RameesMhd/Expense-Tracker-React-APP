import React, { useState } from 'react';
// import the useState from react 
import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    // useState needs a default state value like below 
    // useState(props.title);
    // useState actually returing an array 
    // the first value is the useState variable itself
    // and the second value is an updating function 
    
    const clickHandler = () => {
        // passing the value that used to update,
        // through update function EX: setTitle()
        setTitle('Title Updated');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{title}</h2> 
                {/* title is used above */}
                <h2 className="expense-item_price"> ${props.amount}</h2>
                <button onClick={clickHandler}> Click Me</button>
            </div>
        </Card>
    )
}
export default ExpenseItem;