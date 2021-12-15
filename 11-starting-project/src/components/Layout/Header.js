import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onShowCart={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food!!!" />
      </div>
    </>
  );
};

export default Header;
