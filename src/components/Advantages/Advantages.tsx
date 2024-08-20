import styles from './styles.module.css';

export const Advantages = () => {
	return (
		<section className={styles.advantades}>
			<div className={styles.advantages__Content}>
				<p className={styles.advantages__Title}>10</p>
				<p className={styles.advantages__text}>лет опыта</p>
			</div>
			<div className={styles.advantagesContent}>
				<p className={styles.advantages__Title}>85</p>
				<p className={styles.advantages__text}>высококлассных специалистов</p>
			</div>
			<div className={styles.advantagesContent}>
				<p className={styles.advantages__Title}>8</p>
				<p className={styles.advantages__text}>отделов для идеального результата</p>
			</div>
		</section>
	)
}
