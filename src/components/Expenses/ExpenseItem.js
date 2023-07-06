import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    // UseState must be called directly inside the function
    // use state can't be called outside of the function
    // Aloso shoudn't called inside of any nested function
    const [title, setTitle] = useState(props.title);
    // in the above array destructuring
    // First Element is the current state value
    // Second Element is a funciton for updating that
    const clickHandler = () => {
        setTitle('Title Updated'); 
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{title}</h2>
                <h2 className="expense-item_price"> ${props.amount}</h2>
                <button onClick={clickHandler}> Click Me</button>
            </div>
        </Card>
    )
}
export default ExpenseItem;