import PropTypes from "prop-types";
import { FriendsUl } from "./FriendsList.styled";

import Friends from "../Friends/Friends";

export default function FriendsList({ friends }) {
  return (
    <FriendsUl>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </FriendsUl>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
