import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { IRootReducerState } from "redux/root-reducer";
import { Filter, IFilterLinkProps, FilterLinkContainer } from ".";
import { handleTodosFilter } from "redux/todos/todos.actions"; // something is wrong with absolue imports in index.ts
import { selectTodoFilter } from "redux/todos/todos.selectors"; // something is wrong with absolue imports in index.ts

const FilterLink: FC<IFilterLinkProps> = ({
  filter,
  children,
  activeFilter,
  handleTodosFilter
}) => {
  const [clicked, setClicked] = useState(false);
  const className = "waves-effect waves-light btn";
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
      className={activeFilter === filter ? `${className} red` : className}
      onClick={handleFilterClick}
      style={{ backgroundColor: clicked ? "#9c27b0" : "#26a69a" }}
    >
      {children}
    </FilterLinkContainer>
  );
};

const mapStateToProps = (state: IRootReducerState) => ({
  activeFilter: selectTodoFilter(state)
});

interface IOwnProps {
  filter: Filter;
}
export default connect(
  mapStateToProps,
  { handleTodosFilter }
)(FilterLink as FC<IOwnProps>);
