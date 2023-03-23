import Friend from './Friend';
import PropTypes from 'prop-types';
import s from './friend.module.scss';

const FriendList = ({ items }) => {
  return (
    <ul className={s.users}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <Friend
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
