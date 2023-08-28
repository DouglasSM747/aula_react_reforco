import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto; /* Linhas automáticas */
  grid-auto-flow: row;
  grid-gap: 16px;
`;

export const GridItem = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  background-color: #f2f2f2;
`;
