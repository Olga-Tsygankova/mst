import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';
import { Advantages } from '../../components/Advantages';
import { Result } from '../../components/Result';
import { Hole } from '../../components/Hole';
import { Map } from '../../components/Map';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Intro />
      <Advantages />
      <Leader />
      <Result />
      <Hole />
      <Map />
      <Need />
      <HeartSection />
    </div>
  );
};
