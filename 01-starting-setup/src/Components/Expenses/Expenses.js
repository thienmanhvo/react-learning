import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter(
    (element) => element.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onDropdownSelected={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
