import propTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {data.map(({ id, label, percentage }) => (
          <li className={s.item} key={id} style={{backgroundColor:getRandomHexColor()}}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  data: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
