import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from "./Card";
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

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