import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card cssClass={"users"}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - ({user.age} Years old) - {user.clgName}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
