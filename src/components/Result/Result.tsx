import styles from './styles.module.css';

export const Result = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>Добиваемся результатов<br />за счет жестких принципов<br /> и мягких подходов</h2>
			<div className={styles.cardWrapper}>
				<div className={styles.card}>
					<h3 className={styles.cardTitle}>Правило «Win&nbsp;/&nbsp;Win&nbsp;/&nbsp;Win»</h3>
					<p className={styles.cardDescription}><span className={styles.cardDescriptionSemibold}>Сотрудникам</span> – ресурсы для профессионального роста и самовыражения</p>
					<p className={styles.cardDescription}>Клиентам – качественный результат</p>
					<p className={styles.cardDescription}>Нам – статус ведущего агентства в сфере лидогенерации</p>
				</div>
				<div className={`${styles.card} ${styles.cardOrange}`}>
					<h3 className={styles.cardTitle}>Высокие требования к результату</h3>
					<p className={styles.cardDescription}>Мы делаем всё, чтобы заказчик получил больше того, на что рассчитывал!</p>
				</div>
				<div className={`${styles.card} ${styles.cardWhite}`}>
					<h3 className={styles.cardTitle}>Dream Team</h3>
					<p className={styles.cardDescription}>Собираем у себя только проактивных людей и вкладываемся в их развитие, чтобы получать идеальные результаты!</p>
				</div>
			</div>
		</section>
  );
};
