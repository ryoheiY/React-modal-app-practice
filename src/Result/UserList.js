import Card from "../UI/Card";
import userListCss from "../css/UsersList.module.css";

function UserList(props) {
  if (props.users.length < 1) {
    return;
  }
  return (
    <Card className={userListCss.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li
              key={Math.random()}
            >{`${user.username} (${user.age} years old)`}</li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;
