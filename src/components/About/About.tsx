import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.css';

export const About = () => {
    const leftFirstRef = useRef<HTMLDivElement>(null);
    const leftSecondRef = useRef<HTMLDivElement>(null);
    const rightFirstRef = useRef<HTMLDivElement>(null);
    const rightSecondRef = useRef<HTMLDivElement>(null);
    const centerBallRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (
            leftFirstRef.current &&
            leftSecondRef.current &&
            rightFirstRef.current &&
            rightSecondRef.current &&
            centerBallRef.current
        ) {
            const ballAnimation = gsap.timeline();

            ballAnimation
                .to(leftFirstRef.current, {
                    x: '10vw', // Передвигаем левый первый шарик
                    opacity: 0, // Исчезает
                    duration: 1,
                    ease: 'power2.inOut'
                })
                .to(leftSecondRef.current, {
                    x: '5vw', // Передвигаем левый второй шарик
                    opacity: 0, // Исчезает
                    duration: 1,
                    ease: 'power2.inOut'
                }, "<") // Используем '<' для синхронизации
                .to(rightFirstRef.current, {
                    x: '-5vw', // Передвигаем правый первый шарик
                    opacity: 0, // Исчезает
                    duration: 1,
                    ease: 'power2.inOut'
                }, "<")
                .to(rightSecondRef.current, {
                    x: '-10vw', // Передвигаем правый второй шарик
                    opacity: 0, // Исчезает
                    duration: 1,
                    ease: 'power2.inOut'
                }, "<")
                .to(centerBallRef.current, {
                    opacity: 1, // Появляется
                    scale: 1, // Увеличивается до полного размера
                    duration: 1,
                    ease: 'power2.inOut'
                });
        }
    }, []);

    return (
        <section className={styles.about}>
            <div className={styles.aboutLeft}>
                <div ref={leftFirstRef} className={styles.left__first}>Делаем полный <br/> анализ рынка</div>
                <div ref={leftSecondRef} className={styles.left__second}>Разрабатываем <br/> креативные концепции</div>
            </div>
            <div className={styles.aboutRight}>
                <div ref={rightFirstRef} className={styles.right__first}>Вызываем эмоции и желание <br/> купить у ваших клиентов</div>
                <div ref={rightSecondRef} className={styles.right__second}>Даём результат, который <br/> предвосхищает ожидания</div>
            </div>
            <div ref={centerBallRef} className={styles.centerBall}></div>
        </section>
    );
};
