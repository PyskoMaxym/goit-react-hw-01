import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats}) =>{
    return (
        <div className={styles.profile}>
 <div className={styles.info}>
  <img className={styles.imgprofile}
   src={image}
   alt="User avatar"
  />
  <p className={styles.name}>{name}</p>
 <p className={styles.tag}>@{tag}</p>
  <p className={styles.location}>{location}</p>
 </div>
 <ul className={styles.list}>
  <li className={styles.label}>
   <span>Followers</span>
   <span className={styles.numbers}>{stats.followers}</span>
  </li>
  <li className={styles.label}>
   <span>Views</span>
   <span className={styles.numbers}>{stats.views}</span>
  </li>
  <li className={styles.label}>
   <span>Likes</span>
   <span className={styles.numbers}>{stats.likes}</span>
  </li>
 </ul>
</div>
    )
}

Profile.PropTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;