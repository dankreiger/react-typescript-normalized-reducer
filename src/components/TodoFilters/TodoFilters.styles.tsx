import styled from "styled-components";

export const TodoFiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 476px) {
    flex-direction: row;
    height: 50px;
  }
`;
