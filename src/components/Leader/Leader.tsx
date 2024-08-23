import styles from './styles.module.css';
import { Ball } from './Ball';
import { Logo } from './Logo';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSpan: React.FC<AnimatedSpanProps> = ({ children, className }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      gsap.fromTo(
        spanRef.current,
        { opacity: 0, y: 50 }, // Начальное состояние анимации (невидимый и сдвинутый вниз)
        {
          opacity: 1,          // Конечное состояние (полностью видимый)
          y: 0,                // Возвращаем в исходное положение
          duration: 1,         // Продолжительность анимации 1 секунда
          ease: 'power2.out',  // Плавная анимация
          scrollTrigger: {
            trigger: spanRef.current,  // Элемент, который будет триггером для анимации при скролле
            start: 'top 80%',          // Анимация начинается, когда верх элемента достигает 80% окна
            end: 'bottom 60%',         // Анимация заканчивается, когда низ элемента достигает 60% окна
            toggleActions: 'play none none reverse', // Что делать при скролле: проиграть анимацию и вернуться назад
          },
        }
      );
    }
  }, []);

  return (
    <span ref={spanRef} className={className}>
      {children}
    </span>
  );
};

export const Leader = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
      <AnimatedSpan className={styles.titleNormal}>Лидеры в</AnimatedSpan>
        <span className={styles.logo}>
          <Logo />
        </span>
        <AnimatedSpan className={styles.titleNormal}><span className={styles.titleAnimation}>Лидогенерации</span></AnimatedSpan>
      </h2>
      <p className={styles.description}>
        Наша цель — стать компанией №&nbsp;1 в&nbsp;лидогенерации и мы уверенно
        идём&nbsp;к&nbsp;eё&nbsp;достижению!
      </p>
      <div className={styles.ball}>
        <Ball />
      </div>
    </section>
  );
};
