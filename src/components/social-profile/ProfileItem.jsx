import Profile from './Profile';
import s from './profile.module.scss';

const ProfileItem = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={s.user_item}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        userFollowers={stats.followers}
        userViews={stats.views}
        userLikes={stats.likes}
      />
    </div>
  );
};

export default ProfileItem;
