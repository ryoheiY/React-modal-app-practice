import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "../css/ErrorModal.module.css";
function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={classes.content}>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>OKay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
