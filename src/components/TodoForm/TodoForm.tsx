import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { ITodoFormProps } from "./TodoForm.interface";
import { addTodo } from "./../../redux/todos/";
import { TodoFormContainer } from "./TodoForm.styles";

const TodoForm: FC<ITodoFormProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  return (
    <TodoFormContainer>
      <div className="input-field">
        <input
          data-testid="input"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
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
  { addTodo }
)(TodoForm as FC);
