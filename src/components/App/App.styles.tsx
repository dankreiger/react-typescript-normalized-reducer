import styled from "styled-components";
import { animated } from "react-spring";
import { EFilterPath } from "../FilterLink/FilterLink.enum";
import { FilterLinkPath } from "../FilterLink/FilterLink.type";

export const getBgColor = (filter: FilterLinkPath) => {
  switch (filter) {
    case EFilterPath.ACTIVE:
      return "#f5f5f5";
    case EFilterPath.COMPLETED:
      return "#90caf9";
    default:
      return "inherit";
  }
};

export const AppRoutesContainer = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  will-change: transform, opacity;
`;