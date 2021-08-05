import React from 'react';
import PropTypes, { node } from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ title, children }) => (
  <section className={styles.statistics}>
    {title && <h2 class="title">{title}</h2>}

    {children}
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: node,
};

export default Statistics;
