import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShowForm(false);
  };

  const showFormHandler = () => {
    setIsShowForm(true);
  };

  const hideFormHandler = () => {
    setIsShowForm(false);
  };

  let content = <button onClick={showFormHandler}>Add New Expense</button>;
  if (isShowForm) {
    content = (
      <ExpenseForm
        onCancel={hideFormHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }
  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
