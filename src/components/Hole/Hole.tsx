import styles from './styles.module.css';
import { Circle } from './Circle';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardScrollAnimationProps {
  children: React.ReactNode;
}

const CardScrollAnimation = ({ children }: CardScrollAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.card}`);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 10% top',
          end: '+=200%', // Увеличиваем конец анимации, чтобы дать больше времени для скролла
          scrub: true,
          pin: true,
          markers: false, // Отключаем маркеры после отладки
        }
      });

      // Анимация для каждой карточки: появление с правой стороны и исчезновение
      cards.forEach((card) => {
        timeline
          .fromTo(card,
            { scale: 0, x: 1000, opacity: 0 }, // Начальное состояние (карточка уменьшена до нуля, справа и прозрачна)
            {
              scale: 1, x: '0%', opacity: 1, // Конечное состояние (карточка нормального размера, на месте и полностью видна)
              ease: 'power2.out',
              duration: 1,
              stagger: 0.5, // Задержка между анимациями карточек
            }
          )
          .to(card,
            {
              scale: 0, x: '-100%', opacity: 0, // Уменьшение, перемещение влево и исчезновение карточки
              ease: 'power2.in',
              duration: 1,
            }
          , `+=0.5`); // Небольшая задержка после появления перед исчезновением
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {children}
    </div>
  );
};

export const Hole = () => {
  return (
    <CardScrollAnimation>
      <h2 className={styles.title}>Комплексно подходим к&nbsp;решению маркетинговых задач бизнеса</h2>
      <div className={styles.slider}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Создаем сайты</h3>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>Landing Page</li>
                <li className={styles.cardItem}>Многостраничный сайт</li>
                <li className={styles.cardItem}>Квиз</li>
                <li className={styles.cardItem}>Сайт-визитка</li>
                <li className={styles.cardItem}>Интернет-магазин</li>
                <li className={styles.cardItem}>Блог</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardFirst}`}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Приводим лидов –<br />горячих клиентов</h3>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>Подбираем и фильтруем лидов по конкретным критериям бизнеса, обеспечивая качественные заявки.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Настраиваем и ведем<br />рекламные кампании</h3>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>Яндекс Директ</li>
                <li className={styles.cardItem}>Google Реклама</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Circle />
            </div>
            <h3 className={styles.cardTitle}>Запускаем<br />и ведем SMM</h3>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>YouTube</li>
                <li className={styles.cardItem}>Telegram</li>
                <li className={styles.cardItem}>ВКонтакте</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CardScrollAnimation>
  );
}
