import PropTypes from 'prop-types';
import s from './statistics.module.scss';

const Statistics = ({ label, percentage }) => {
  return (
    <>
      <p className={s.label}>{label}</p>
      <p className={s.percentage}>{`${percentage}%`}</p>
    </>
  );
};

Statistics.protoType = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
