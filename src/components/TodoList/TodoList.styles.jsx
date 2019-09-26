import styled from "styled-components";

export const TodoListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  font-size: 1.5em;
  @media (min-width: 476px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
