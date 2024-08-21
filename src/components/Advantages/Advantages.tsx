import styles from './styles.module.css';

export const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<div className={styles.advantagesContent}>
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
			</div>
		</section>
	)
}
