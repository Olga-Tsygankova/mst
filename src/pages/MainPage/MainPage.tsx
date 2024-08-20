import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';


export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Intro />
      <Leader />
      <Need />
      <HeartSection />
    </div>
  );
};
