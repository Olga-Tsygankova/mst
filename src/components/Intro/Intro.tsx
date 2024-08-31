import styles from './styles.module.css';
import { IntroTitle } from './IntroTitle';
import { Header } from './Header';
import { Bublik } from './Bublik';
import { GradientScroll } from './GradientScroll';
import { FormCase } from '../Forms/FormCase.tsx';

type IProps = {
  onGetQuoteClick: () => void;
  showForm: boolean;
  handleCloseForm: () => void;
};

export const Intro = ({
  onGetQuoteClick,
  showForm,
  handleCloseForm,
}: IProps) => {
  return (
    <section className={styles.intro}>
      <Header />
      <GradientScroll />
      <IntroTitle onGetQuoteClick={onGetQuoteClick} />
      {showForm && <FormCase onClose={handleCloseForm} />}
      <Bublik />
    </section>
  );
};
