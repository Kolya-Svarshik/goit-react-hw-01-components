import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import s from './profile.module.scss';

const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  userFollowers,
  userViews,
  userLikes,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>
          <strong>{username}</strong>
        </p>
        <p className={s.tag}>{`@${tag}`}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.items}>
          <p className={s.label}>Followers</p>
          <p className={s.quantity}>
            <strong>{userFollowers}</strong>
          </p>
        </li>
        <li className={s.items}>
          <p className={s.label}>Views</p>
          <p className={s.quantity}>
            <strong>{userViews}</strong>
          </p>
        </li>
        <li className={s.items}>
          <p className={s.label}>Likes</p>
          <p className={s.quantity}>
            <strong>{userLikes}</strong>
          </p>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  userFollowers: PropTypes.number.isRequired,
  userViews: PropTypes.number.isRequired,
  userLikes: PropTypes.number.isRequired,
};

export default Profile;
