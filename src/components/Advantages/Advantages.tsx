import styles from './styles.module.css';
import { AnimatedCard } from './AnimatedCard'

export const Advantages = () => {
	return (
		<section className={styles.advantages}>
			{/* <div className={styles.advantagesContent}>
				<p className={styles.advantages__title}>&#62;10</p>
				<p className={styles.advantages__text}>лет опыта</p>
			</div>
			<div className={styles.advantagesContentPlanshet}>
				<p className={styles.advantages__title}>85</p>
				<p className={styles.advantages__text}>высококлассных специалистов</p>
			</div>
			<div className={styles.advantagesContent}>
				<p className={styles.advantages__title}>8</p>
				<p className={styles.advantages__text}>отделов для идеального результата</p>
			</div> */}
			<div className={styles.advantagesContent}>
				<AnimatedCard targetNumber={&10} text="лет опыта" index={0} />
			</div>
			<div className={styles.advantagesContent}>
				<AnimatedCard targetNumber={85} text="высококлассных специалистов" index={1} />
			</div>
			<div className={styles.advantagesContent}>
				<AnimatedCard targetNumber={8} text="отделов для идеального результата" index={2} />
			</div>
		</section>
	)
}
