import { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);
  const addItemHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountRef.current.value;
    if (isNaN(enteredAmount) || enteredAmount < 1 || enteredAmount > 5) {
      setIsValidAmount(false);
      return;
    }
    setIsValidAmount(true);
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={addItemHandler}>
      <Input
        label="Amount"
        input={{
          ref: amountRef,
          id: "amount_" + props.id,
          type: "number",
          step: 1,
          min: 1,
          max: 5,
          defaultValue: 1
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
