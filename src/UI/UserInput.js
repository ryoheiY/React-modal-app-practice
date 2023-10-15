import Button from "./Button";
import stylesAddUserForm from "../css/AddUser.module.css";
import { useState } from "react";
import Card from "./Card";
import ErrorModal from "../Mordal/ErrorModal";
function UserInput(props) {
  const initUserInput = {
    username: "",
    age: ""
  };
  const [userInput, setUserInput] = useState(initUserInput);
  const [error, setError] = useState();
  const inputChangeHandler = (event) => {
    if (event.target.id === "username") {
      setUserInput({ ...userInput, username: event.target.value });
    } else if (event.target.id === "age") {
      setUserInput({ ...userInput, age: event.target.value });
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)"
      });
      return;
    }
    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age( > 0)"
      });
      return;
    }
    props.onAddUser(userInput);
    setUserInput(initUserInput);
  };

  const errorHandler = (event) => {
    console.log("Hi");
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onClick={errorHandler}
          message={error.message}
          title={error.title}
        />
      )}
      <Card className={stylesAddUserForm.input}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            value={userInput.username}
            type="text"
            id="username"
            onChange={inputChangeHandler}
          />
          <label>Age(Years)</label>
          <input
            value={userInput.age}
            type="number"
            id="age"
            onChange={inputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default UserInput;
