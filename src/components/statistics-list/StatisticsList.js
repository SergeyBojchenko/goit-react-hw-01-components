import React from 'react';
import PropTypes from 'prop-types';
import styles from './statisticsList.module.css';

const StatisticsList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage, color }) => (
      <li className={styles.item} style={{ backgroundColor: color }} key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}</span>
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
