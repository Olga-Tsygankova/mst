import styles from './styles.module.css';
import { IntroTitle } from './IntroTitle';
import { Header } from './Header';
import { Bublik } from './Bublik';
import { GradientScroll } from './GradientScroll';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <Header />
      <GradientScroll />
      <IntroTitle />
      <Bublik />
    </section>
  );
};
