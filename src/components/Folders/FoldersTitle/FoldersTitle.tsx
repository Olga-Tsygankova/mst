import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const FoldersTitle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 } // Визуализация элемента на 50% экрана
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div ref={titleRef} className={styles.foldersTitle}>
      <h2>
        Обеспечиваем результат сплоченной работой {' '}
        <span className={`${styles.titleOrange} ${isVisible ? styles.animate : ''}`}>
          8 отделов
        </span>
      </h2>
    </div>
  );
};
