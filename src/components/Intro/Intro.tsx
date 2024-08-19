import styles from './styles.module.css';
import { IntroTitle } from './IntroTitle';
import { Header } from './Header';

export const Intro = () => {
	return (
		<section>
			<Header />
			<IntroTitle />
		</section>
	)
}
