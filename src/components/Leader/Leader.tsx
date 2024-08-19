import styles from './styles.module.css';
import { Ball } from '../../components/Leader/Ball';

export const Leader = () => {
  return (
    <section className={styles.wrapper}>
			<h2 className={styles.title}><span className={styles.titleNormal}>Лидеры в</span><img src="" alt="" className={styles.titleIcon} /><span className={styles.titleAnimation}>Лидогенерации</span></h2>
			<p className={styles.description}>Наша цель — стать компанией № 1 в лидогенерации и мы уверенно идём к её достижению!</p>
			<Ball />
    </section>
  );
};
