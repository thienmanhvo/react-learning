import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  return (
    <div className="expenses">
      {props.expenses.map((element) => (
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </div>
  );
}

export default Expense;
