import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { IFilterLinkProps } from "./FilterLink.interface";
import { FilterLinkContainer } from "./FilterLink.styled";
import { handleTodosFilter, selectRouterPathname } from "../../redux/todos";
import { createStructuredSelector } from "reselect";
import { IRootReducerState } from "../../redux/root-reducer";
import { FilterLinkPath } from "./FilterLink.type";

const FilterLink: FC<IFilterLinkProps> = ({
  filter,
  handleTodosFilter,
  children,
  activeRoute
}) => {
  const [clicked, setClicked] = useState(false);
  const className = "waves-effect waves-light btn";

  useEffect(() => {
    if (activeRoute !== filter) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }, [activeRoute, filter]);

  const handleFilterClick = () => {
    setClicked(true);
    handleTodosFilter(filter);
  };
  return (
    <FilterLinkContainer
      className={activeRoute === filter ? `${className} red` : className}
      onClick={handleFilterClick}
      style={{ backgroundColor: clicked ? "#9c27b0" : "#26a69a" }}
    >
      {children}
    </FilterLinkContainer>
  );
};

const mapStateToProps = createStructuredSelector<
  IRootReducerState,
  { activeRoute: FilterLinkPath }
>({
  activeRoute: selectRouterPathname
});

export default connect(
  mapStateToProps,
  { handleTodosFilter }
)(FilterLink);
