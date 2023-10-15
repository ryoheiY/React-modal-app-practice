import React, { useState } from "react";
import UserInput from "./UI/UserInput";
import UserList from "./Result/UserList";
function App() {
  const [userArray, setUserArray] = useState([]);
  const addUserHandler = (inputUser) => {
    setUserArray([...userArray, inputUser]);
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={userArray} />
    </div>
  );
}

export default App;
