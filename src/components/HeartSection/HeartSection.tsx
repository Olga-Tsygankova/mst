import styles from './styles.module.css';
import { Arrow } from './Arrow';
import { ArrowLine } from './ArrowLine';
import { Heart } from './Heart';
// import { useEffect, useRef } from 'react';
// import ScrollMagic from 'scrollmagic';

export const HeartSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftText}>
          <div>Удаленная работа</div>
          <div>Обучение, наставничество и поддержка</div>
          <div>Праздники и корпоративы в Дубае и других странах</div>
        </div>
        <div>
          <div className={styles.arrow}>
            <Arrow />
          </div>
          <div className={styles.arrowLine}>
            <ArrowLine />
          </div>
        </div>
        <div className={styles.rightText}>
          <div>
            Открытое общение и максимум свободы в рамках выполнения задач
          </div>
          <div>
            Комфортная команда, которая создает идеальную среду для роста
          </div>
        </div>
      </div>
      <div className={styles.heart}>
        <Heart />
        <div className={styles.btn}>Хочу к вам</div>
      </div>
    </div>
  );
};
