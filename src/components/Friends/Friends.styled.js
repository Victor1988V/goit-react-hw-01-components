import styled from "styled-components";

export const Sign = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${({ mode }) => {
    switch (mode) {
      case "true":
        return "green";

      case "false":
        return "red";
      default:
        return "transparent";
    }
  }};
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 26px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  box-shadow: 2px 5px 5px #4b576096;
`;

export const Image = styled.img`
  width: 40px;
`;
