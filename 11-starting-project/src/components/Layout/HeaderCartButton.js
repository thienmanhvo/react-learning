import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  var cartContext = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const buttonClass = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;
    setIsButtonHighlighted(true);

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClass} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartContext.items.reduce((total, current) => {
          return total + current.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
