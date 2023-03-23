import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './statistics.module.scss';
import { colorPickerOptions } from '../color-picker/colorPicker';

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.stat_list}>
        {stats.map((item, i) => (
          <li
            className={s.item}
            style={{ backgroundColor: colorPickerOptions[i].backgroundColor }}
            key={item.id}
          >
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
