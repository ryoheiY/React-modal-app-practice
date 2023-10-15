import style from "../css/Card.module.css";

function Card(props) {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
