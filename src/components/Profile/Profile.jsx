import PropTypes from "prop-types";
import {
  ProfileCard,
  ProfileWrap,
  ProfileInfo,
  ProfileImage,
  UserName,
  UserInfo,
  StatsList,
  StatsItem,
  StatsType,
  StatsData,
} from "./Profile.styled";

export default function Profile({ avatar, username, location, tag, stats }) {
  return (
    <ProfileCard>
      <ProfileWrap>
        <ProfileInfo>
          <ProfileImage src={avatar} alt={username} />
          <UserName>{username}</UserName>
          <UserInfo>@{tag}</UserInfo>
          <UserInfo>{location}</UserInfo>
        </ProfileInfo>

        <StatsList>
          <StatsItem>
            <StatsType>Followers</StatsType>
            <StatsData>{stats.followers}</StatsData>
          </StatsItem>
          <StatsItem>
            <StatsType>Views</StatsType>
            <StatsData>{stats.views}</StatsData>
          </StatsItem>
          <StatsItem>
            <StatsType>Likes</StatsType>
            <StatsData>{stats.likes}</StatsData>
          </StatsItem>
        </StatsList>
      </ProfileWrap>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
