import React from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModel.css";

const ErrorModel = (props) => {
  return (
    <div onClick={props.onConfirm}>
      <div className="backdrop"/>
      <Card cssClass="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
