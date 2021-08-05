import React from 'react';
import PropTypes from 'prop-types';
import FriendListItems from '../friend-list-items/FriendListItems';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => FriendListItems(friend))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.boolean,
    }),
  ).isRequired,
};

export default FriendList;
