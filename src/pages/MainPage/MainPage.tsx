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
import { Folders } from '../../components/Folders'
import {FormKP} from '../../components/Forms';
import { useState } from 'react';

export const MainPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetQuoteClick = () => {
    console.log('Кнопка нажата, показываем форму'); // Проверка нажатия кнопки
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className={styles.mainPageWrapper}>
      <Intro onGetQuoteClick={handleGetQuoteClick} showForm={showForm} handleCloseForm={handleCloseForm}/>
      <About />
      <Advantages />
      <Leader />
      <Result />
      <Hole />
      <Folders onGetQuoteClick={handleGetQuoteClick} />
      {showForm &&
        <FormKP onClose={handleCloseForm}/>}
      <Map />
      <Need />
      <HeartSection />
    </div>
  );
};
