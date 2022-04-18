import classes from "./Header.module.css";
import mealImg from "../../assets/meals.jpg";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food!!!" />
      </div>
    </>
  );
};


export default Header;
