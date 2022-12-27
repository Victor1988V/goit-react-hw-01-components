import PropTypes from "prop-types";
import { Sign, Item, Image } from "./Friends.styled";

export default function Friends({ avatar, name, isOnline }) {
  return (
    <Item class="item">
      <Sign class="status" mode={`${isOnline.toString()}`}></Sign>
      <Image class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </Item>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
