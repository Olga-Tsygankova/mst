import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Need />
      <HeartSection />
    </div>
  );
};
