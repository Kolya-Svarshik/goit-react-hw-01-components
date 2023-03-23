import PropTypes from 'prop-types';
import TransactionHistory from './TransactionHistory';
import s from './transactionHistory.module.scss';

const TransactionHistoryList = ({ items }) => {
  return (
    <table className={s.transaction_history}>
      <thead className={s.head}>
        <tr className={s.head_item}>
          <th className={s.head_text}>Type</th>
          <th className={s.head_text}>Amount</th>
          <th className={s.head_text}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(item => (
          <tr className={s.body_item} key={item.id}>
            <TransactionHistory
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistoryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistoryList;
