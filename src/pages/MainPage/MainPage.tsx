import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';
import { Result } from '../../components/Result';
import { About } from '../../components/About';


export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Intro />
      <About />
      <Leader />
      <Result />
      <Need />
      <HeartSection />
    </div>
  );
};
