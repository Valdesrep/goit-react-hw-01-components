import propTypes from 'prop-types';
import s from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
