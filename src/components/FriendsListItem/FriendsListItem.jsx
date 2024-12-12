import PropTypes from 'prop-types';
import styles from  './FriendsListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendcard}>
      <img src={avatar} alt={`${name} avatar`} width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${isOnline ? styles.online :
        styles.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;