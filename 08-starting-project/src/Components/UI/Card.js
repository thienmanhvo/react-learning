import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${style.Card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
