import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';
import { Advantages } from '../../components/Advantages';
import { Result } from '../../components/Result';
import { About } from '../../components/About';
import { Hole } from '../../components/Hole';
import { Map } from '../../components/Map';
import { Folders } from '../../components/Folders';
import { FormKP } from '../../components/Forms';
import { useState } from 'react';

export const MainPage = () => {
  const [showFormKP, setShowFormKP] = useState(false);
  const [showFormCase, setShowFormCase] = useState(false);
  const [showFormWant, setShowFormWant] = useState(false);

  const handleGetQuoteClickKP = () => {
    console.log('Кнопка нажата, показываем форму'); // Проверка нажатия кнопки
    setShowFormKP(true);
  };
  const handleCloseFormKP = () => {
    setShowFormKP(false);
  };

  const handleGetQuoteClickCase = () => {
    console.log('Кнопка нажата, показываем форму'); // Проверка нажатия кнопки
    setShowFormCase(true);
  };
  const handleCloseFormCase = () => {
    setShowFormCase(false);
  };

  const handleGetQuoteClickWant = () => {
    console.log('Кнопка нажата, показываем форму'); // Проверка нажатия кнопки
    setShowFormWant(true);
  };
  const handleCloseFormWant = () => {
    setShowFormWant(false);
  };

  return (
    <div className={styles.mainPageWrapper}>
      <Intro
        onGetQuoteClick={handleGetQuoteClickCase}
        showFormCase={showFormCase}
        handleCloseForm={handleCloseFormCase}
      />
      <About />
      <Advantages />
      <Leader />
      <Result />
      <Hole />
      <Folders onGetQuoteClick={handleGetQuoteClickKP} />
      {showFormKP && <FormKP onClose={handleCloseFormKP} />}
      <Map />
      <Need />
      <HeartSection
        onGetQuoteClick={handleGetQuoteClickWant}
        showForm={showFormWant}
        handleCloseForm={handleCloseFormWant}
      />
    </div>
  );
};
