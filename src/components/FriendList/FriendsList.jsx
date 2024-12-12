import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";
import FriendListItem from "../FriendsListItem/FriendsListItem";


const FriendList = ({ friends }) => {
    return (
      <ul className={styles.friendlist}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className={styles.friendcard}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    );
  };
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

  export default FriendList;