import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{props.meal.price.toFixed(2)}</div>
      </div>
      <MealItemForm id={props.meal.id}/>
    </li>
  );
};

export default MealItem;
