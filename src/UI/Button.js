import stylesButton from "../css/Button.module.css";
function Button(props) {
  return (
    <button
      className={stylesButton.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
