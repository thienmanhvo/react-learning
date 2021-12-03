import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((element) => (
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
