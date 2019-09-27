import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { ITodoFormProps } from "./types/TodoForm.interface";
import { TodoFormContainer } from "./TodoForm.styles";
import { addTodo } from "api";
import { ITodo } from "redux/todos";
const uuidv1 = require("uuid/v1");

const TodoForm: FC<ITodoFormProps> = () => {
  const [inputValue, setInputValue] = useState("");
  // testing json server - will move to redux saga
  const handleAddTodo = async () => {
    const todo: ITodo = { id: uuidv1(), text: inputValue, completed: false };
    await addTodo(todo);
    setInputValue("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  return (
    <TodoFormContainer>
      <div className="input-field" style={{ zIndex: 1, width: "80%" }}>
        <input
          data-testid="input"
          style={{ width: "100%" }}
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Todo: finish this again - try using websockets: https://blogs.sap.com/2019/02/25/ui5-web-components-react-redux-socket.io/"
          onKeyDown={handleKeyDown}
        />
      </div>
      <button className="waves-effect waves-light btn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </TodoFormContainer>
  );
};

export default connect(
  null,
  null
)(TodoForm as FC);
