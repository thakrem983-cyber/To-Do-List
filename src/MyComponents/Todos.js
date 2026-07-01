import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
    minHeight: "70vh",
    };
  return (
    <div className="container my-3" style={myStyle}>
      <h3>Todos List</h3>

      {props.todos.length === 0 ? (
        <h5 className="text-center">No Todos to display</h5>
      ) : (
        props.todos.map((todo) => (
          <div key={todo.sno}>
            <TodoItem todo={todo} onDelete={props.onDelete} />
            <hr />
          </div>
        ))
      )}
    </div>
  );
};
