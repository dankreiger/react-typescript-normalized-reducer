import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { IRootReducerState } from "redux/root-reducer";
import { Filter, IFilterLinkProps, FilterLinkContainer } from ".";
import { handleTodosFilter } from "redux/todos/todos.actions"; // something is wrong with absolue imports in index.ts
import { selectTodoFilter, selectError } from "redux/todos/todos.selectors"; // something is wrong with absolue imports in index.ts
import { BUTTON_CLASS } from "utils/style-utils";

const FilterLink: FC<IFilterLinkProps> = ({
  filter,
  children,
  activeFilter,
  handleTodosFilter,
  error
}) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (activeFilter !== filter) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }, [activeFilter, filter]);

  const handleFilterClick = () => {
    setClicked(true);
    handleTodosFilter(filter);
  };
  return (
    <FilterLinkContainer
      className={activeFilter === filter ? `${BUTTON_CLASS} red` : BUTTON_CLASS}
      onClick={handleFilterClick}
      disabled={!!error}
      style={{ backgroundColor: clicked ? "#9c27b0" : "#26a69a" }}
    >
      {children}
    </FilterLinkContainer>
  );
};

const mapStateToProps = (state: IRootReducerState) => ({
  activeFilter: selectTodoFilter(state),
  error: selectError(state)
});

interface IOwnProps {
  filter: Filter;
}
export default connect(
  mapStateToProps,
  { handleTodosFilter }
)(FilterLink as FC<IOwnProps>);
