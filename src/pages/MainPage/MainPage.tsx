import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';
import { Result } from '../../components/Result';
import { Hole } from '../../components/Hole';
import { Folders } from '../../components/Folders'

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Intro />
      <Leader />
      <Result />
      <Hole />
      <Folders />
      <Need />
      <HeartSection />
    </div>
  );
};
