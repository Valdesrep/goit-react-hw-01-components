import propTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({}) => {
    return <section className={s.statistics}>
    <h2 class="title">Upload stats</h2>
  
    <ul class="stat-list">
      <li className={s.item}Name>
        <span className={s.label}>.docx</span>
        <span className={s.percentage}>4%</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>.mp3</span>
        <span className={s.percentage}>14%</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>.pdf</span>
        <span className={s.percentage}>41%</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>.mp4</span>
        <span className={s.percentage}>12%</span>
      </li>
    </ul>
  </section>
};
