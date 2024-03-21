import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const handleDelete = () => {
       
        props.onDelete(props.id); // Assuming onDelete is a function passed as prop to delete the expense
      };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={handleDelete}>Delete Expense</button>
      </div>

    </Card>
  );
}

export default ExpenseItem;