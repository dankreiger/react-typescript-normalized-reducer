import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { ITodoFormProps } from "./types/TodoForm.interface";
import { TodoFormContainer } from "./TodoForm.styles";
import { addTodoBegin } from "redux/todos";
import { BUTTON_CLASS } from "utils/style-utils";

const TodoForm: FC<ITodoFormProps> = ({ addTodoBegin }) => {
  const [inputValue, setInputValue] = useState("");
  // testing json server - will move to redux saga and maybe use socket.io later
  const handleAddTodoBegin = async () => {
    addTodoBegin(inputValue);
    setInputValue("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleAddTodoBegin();
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
      <button className={BUTTON_CLASS} onClick={handleAddTodoBegin}>
        Add Todo
      </button>
    </TodoFormContainer>
  );
};

export default connect(
  null,
  { addTodoBegin }
)(TodoForm as FC);
