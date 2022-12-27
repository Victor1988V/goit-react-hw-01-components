import styled from "styled-components";

export const Table = styled.table`
  padding: 0;
  min-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 1px solid #4b576096;
  box-shadow: 2px 5px 5px #4b576096;
`;

export const Thead = styled.thead`
  background-color: #2cbcb079;
  height: 35px;
  /* border-radius: 40px;
  border: 10px solid black; */
  width: 150px;
`;

export const TableRow = styled.tr`
  text-align: center;
  margin-left: 20px;
  &:nth-child(even) {
    background-color: #6a6a6a23;
  }
`;
