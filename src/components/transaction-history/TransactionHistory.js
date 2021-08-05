import React from 'react';
import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const Transactionhistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.cellTh}>Type</th>
        <th className={styles.cellTh}>Amount</th>
        <th className={styles.cellTh}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles.cell}>{type}</td>
          <td className={styles.cell}>{amount}</td>
          <td className={styles.cell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Transactionhistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Transactionhistory;
