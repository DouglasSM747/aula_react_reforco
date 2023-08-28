import styled from "styled-components";

export const Container = styled.div<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.$width ? props.$width : '100%'};
  justify-content: center;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button<{ $enabled?: boolean; $width?: string }>`
  background-color: #4caf50;
  color: white;
  width: ${(props) => props.$width ? props.$width : '100%'};
  padding: 10px 20px;
  border: none;
  margin-top: 10px;
  border-radius: 4px;
  display: flex; /* Adiciona display flex */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  cursor: pointer;
  opacity: ${(props) => (props.$enabled ?? true ? 1 : 0.5)};
`;

export const StyledForm = styled.form`
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  font-weight: bold;
`;
