import styles from './styles.module.css';
import { Arrow } from './Arrow';
import { ArrowLine } from './ArrowLine';
import { Heart } from './Heart';
import { useEffect, useRef, useState } from 'react';
// import ScrollMagic from 'scrollmagic';

export const HeartSection = () => {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (containerRect.bottom < windowHeight / 2) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.leftText}>
          <div>Удаленная работа</div>
          <div>Обучение, наставничество и поддержка</div>
          <div>Праздники и корпоративы в Дубае и других странах</div>
        </div>
        <div>
          <div
            className={styles.arrow}
            ref={arrowRef}
            style={{ opacity: isVisible ? 1 : 0 }}
          >
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
