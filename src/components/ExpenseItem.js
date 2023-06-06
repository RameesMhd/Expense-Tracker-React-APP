import './ExpenseItem.css';
import Card from "./Card";
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate  date= {props.date}/>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <h2 className="expense-item_price"> ${props.amount}</h2>
            </div>
        </Card>
    )
}
export default ExpenseItem;