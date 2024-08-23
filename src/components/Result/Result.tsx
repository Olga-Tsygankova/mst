import styles from './styles.module.css';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardScrollAnimationProps {
  children: React.ReactNode;
}

const CardScrollAnimation: React.FC<CardScrollAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.card}`);

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top', // Начинаем анимацию, когда верх контейнера достигает верха окна
          end: '+=100%', // Анимация длится на 300% высоты окна
          scrub: true, // Привязка анимации к прокрутке
          pin: true, // Фиксируем скролл на месте, пока длится анимация
          markers: true,
        }
      })
      .fromTo(cards,
        { y: 200, rotation: -10, opacity: 0 }, // Начальное состояние (карточки снизу, повёрнуты, прозрачные)
        {
          y: 0, rotation: 0, opacity: 1, // Конечное состояние (карточки на месте, без поворота, видимые)
          stagger: 0.3, // Задержка между анимацией каждой карточки
          ease: 'power2.out',
          duration: 1
        }
      )
      .to(cards,
        { y: -200, rotation: 10, opacity: 0, // Возвращаем карточки обратно вверх, снова поворачивая
          stagger: 0.3,
          ease: 'power2.in',
          duration: 1
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {children}
    </div>
  );
};

export const Result = () => {
  return (
    <div className={styles.section}>
    <CardScrollAnimation>
      <h2 className={styles.title}>
        Добиваемся результатов
        <br />
        за счет жестких принципов
        <br /> и мягких подходов
      </h2>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            Правило «Win&nbsp;/&nbsp;Win&nbsp;/&nbsp;Win»
          </h3>
          <p className={styles.cardDescription}>
            <span className={styles.cardDescriptionSemibold}>Сотрудникам</span>
            – ресурсы для профессионального роста и самовыражения
          </p>
          <p className={styles.cardDescription}>
            Клиентам – качественный результат
          </p>
          <p className={styles.cardDescription}>
            Нам – статус ведущего агентства в сфере лидогенерации
          </p>
        </div>
        <div className={`${styles.card} ${styles.cardOrange}`}>
          <h3 className={styles.cardTitle}>Высокие требования к результату</h3>
          <p className={styles.cardDescription}>
            Мы делаем всё, чтобы заказчик получил больше того, на что
            рассчитывал!
          </p>
        </div>
        <div className={`${styles.card} ${styles.cardWhite}`}>
          <h3 className={styles.cardTitle}>Dream Team</h3>
          <p className={styles.cardDescription}>
            Собираем у себя только проактивных людей и вкладываемся в их
            развитие, чтобы получать идеальные результаты!
          </p>
        </div>
      </div>
    </CardScrollAnimation></div>
  );
};
