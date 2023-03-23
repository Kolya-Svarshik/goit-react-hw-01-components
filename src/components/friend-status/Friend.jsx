import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './friend.module.scss';

const Friend = ({ isOnline, avatar = defaultImage, name }) => {
  return (
    <div className={s.elem}>
      <div className={isOnline === true ? s.online : s.offline}></div>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.oneOf([true, false]).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
