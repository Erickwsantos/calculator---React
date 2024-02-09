import styled from "styled-components";

export const ButtonContainer = styled.button<{
  bgColor: string;
  color: string;
}>`
  padding: 18px;
  border: 1px solid #000;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 700;
  border-radius: 50px;
  flex: 1;

  &:hover {
    background-color: #ffffff;
    color: #ffa500;
  }
`;
