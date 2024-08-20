import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Leader } from '../../components/Leader';
import { Advantages } from '../../components/Advantages';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Advantages />
      <Leader />
      <Need />
      <HeartSection />
    </div>
  );
};
