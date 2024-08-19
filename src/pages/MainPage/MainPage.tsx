import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Intro />
      <Need />
      <HeartSection />
    </div>
  );
};
