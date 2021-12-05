import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onDropdownSelected={filterChangeHandler}
      />
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
