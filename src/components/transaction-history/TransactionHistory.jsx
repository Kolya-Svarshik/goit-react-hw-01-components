import PropTypes from 'prop-types';
import s from './transactionHistory.module.scss';

const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <>
      <td className={s.body_text}>{type}</td>
      <td className={s.body_text}>{amount}</td>
      <td className={s.body_text}>{currency}</td>
    </>
  );
};

TransactionHistory.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
