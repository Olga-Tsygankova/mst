import styles from './styles.module.css';
import { Slider } from './Slider';

export const Hole = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>Комплексно подходим к&nbsp;решению маркетинговых задач бизнеса</h2>
			<div className={styles.slider}>
				<Slider />
			</div>
		</section>
	)
}
