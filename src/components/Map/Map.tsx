import styles from './styles.module.css';

export const Map = () => {
  return (
		<section className={styles.wrapper}>
			<div className={styles.contreWrapper}>
				<h2 className={styles.title}>Хотите стать<br />одним из нас? </h2>
				<p className={styles.description}>Приглашаем в команду</p>
				<ul className={styles.list}>
					<li className={styles.listItem}>Кипр</li>
					<li className={styles.listItem}>Бали</li>
					<li className={styles.listItem}>Россия</li>
					<li className={styles.listItem}>Испания</li>
					<li className={styles.listItem}>Беларусь</li>
					<li className={styles.listItem}>Казахстан</li>
					<li className={styles.listItem}>Грузия</li>
					<li className={styles.listItem}>Азербайджан</li>
				</ul>
			</div>
    </section>
  );
};
