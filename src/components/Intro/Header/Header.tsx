import styles from './styles.module.css';
import MainLogo from '../../../assets/Intro/main-logo.svg';
import Tg from '../../../assets/Intro/tg.svg';

export const Header = () => {
	return (
		<section>
			<div>
				<img src={ MainLogo } alt="" />
			</div>
			<div>
				<a href="tel:+7 (999) 999 99-99">+7 (999) 999 99-99</a>
				<img src={ Tg } alt="" />
			</div>
		</section>
	)
}
