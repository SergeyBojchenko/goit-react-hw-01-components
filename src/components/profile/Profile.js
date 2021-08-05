import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default-image.jpg';
import styles from './profile.module.css';

const Profile = ({
  urlAvatar,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={urlAvatar}
        alt="Аватар пользователя"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  urlAvatar: defaultImg,
};

Profile.propTypes = {
  urlAvaytar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  Followers: PropTypes.number.isRequired,
  Views: PropTypes.number.isRequired,
  Likes: PropTypes.number.isRequired,
};

export default Profile;
