import styled from "styled-components";

export const ProfileCard = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #3d5257;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #4b576096;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  gap: 10px;
  padding: 25px 15px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  margin-bottom: 15px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const UserInfo = styled.p`
  color: #4b7474c4;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 250px;
  padding: 15px;
  border-top: 1px solid #3d5257;
  gap: 10px;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  display: inline-flex;
  width: 70px;
  flex-direction: column;
  gap: 5px;
`;

export const StatsType = styled.span`
  color: #4b7474c4;
  text-align: center;
`;

export const StatsData = styled.span`
  text-align: center;
  font-weight: 700;
`;
