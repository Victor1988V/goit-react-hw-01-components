import styled from "styled-components";

export const Stats = styled.section`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StatsItem = styled.li`
  width: 70px;
  max-width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #4b576096;
`;

export const StatsLabel = styled.span`
  text-align: center;
  font-size: large;
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid black;
`;

export const StatsPerc = styled.span`
  text-align: center;
  font-size: large;
  padding: 5px 0;
`;
