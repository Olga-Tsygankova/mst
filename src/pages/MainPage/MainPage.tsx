import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Leader } from '../../components/Leader';
import { Result } from '../../components/Result';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Leader />
      <Result />
      <Need />
      <HeartSection />
    </div>
  );
};
