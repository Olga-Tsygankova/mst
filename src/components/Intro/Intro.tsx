import styles from './styles.module.css';
import { IntroTitle } from './IntroTitle';
import { Header } from './Header';
import { Bublik } from './Bublik';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <Header />
      <IntroTitle />
      <Bublik />
    </section>
  );
};
