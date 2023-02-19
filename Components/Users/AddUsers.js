import React, { Fragment, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.css";
import ErrorModel from "../UI/ErrorModel";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const clgInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredClgName = clgInputRef.current.value;

    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredClgName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name, age and college name(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, enteredClgName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    clgInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card cssClass="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <label htmlFor="clgname">College Name</label>
          <input id="clgname" type="text" ref={clgInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUsers;
