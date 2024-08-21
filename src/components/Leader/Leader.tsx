import styles from './styles.module.css';
import { Ball } from './Ball';
import { Logo } from './Logo';

export const Leader = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        <span className={styles.titleNormal}>Лидеры в</span>
        <span className={styles.logo}>
          <Logo />
        </span>
        <span className={styles.titleAnimation}>Лидогенерации</span>
      </h2>
      <p className={styles.description}>
        Наша цель — стать компанией №&nbsp;1 в&nbsp;лидогенерации и мы уверенно
        идём&nbsp;к&nbsp;eё&nbsp;достижению!
      </p>
      <div className={styles.ball}>
        <Ball />
      </div>
    </section>
  );
};
