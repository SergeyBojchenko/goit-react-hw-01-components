import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItems.module.css';

const FriendListItems = ({ id, avatar, name, isOnline }) => (
  <li className={styles.item} key={id}>
    <span
      className={styles.status}
      style={{
        backgroundColor: isOnline ? 'rgb(0, 255, 0)' : 'rgb(255, 0, 0)',
      }}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItems.defaultProps = {
  isOnline: false,
};

FriendListItems.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.boolean,
    }),
  ).isRequired,
};

export default FriendListItems;
