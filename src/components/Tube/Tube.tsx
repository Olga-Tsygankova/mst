import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import styles from './styles.module.css';
import pipe from '../../assets/Tube/pipe.svg';
import gradient from '../../assets/Tube/gradient.svg'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const Tube: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const pipeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ballRef.current && pipeRef.current) {
      const path = pipeRef.current.querySelector('path');

      if (path) {
        gsap.timeline({
          scrollTrigger: {
            trigger: pipeRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true, // Удалите или оставьте для отладки
          }
        }).to(ballRef.current, {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 1,
            end: 0
          },
          duration: 1,
          ease: 'none'
        });
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <img src={ pipe } className={styles.tube} alt="Pipe Icon" />
      <svg ref={pipeRef} className={styles.pipe} viewBox="0 0 400 600">
        <path
          d="M6.82571 641C6.82571 641 -7.13588 502.341 8.92803 444.632C9.31885 443.21 9.73664 441.788 10.1679 440.415C33.7112 363.192 81.876 351.719 99.638 289.155C110.608 250.519 114.098 214.629 102.104 167.314C87.8057 110.929 45.7861 101.466 28.5498 70.331C9.96576 36.6469 10.2083 0.216919 10.2083 0.216919" // Замените путь, если нужно
          fill="transparent"
          stroke="transparent"
          strokeWidth="2"
        />
      </svg>
      <div ref={ballRef} className={styles.ball}>
        {/* Замените этот div на вашу иконку */}
        <img src={ gradient } alt="Ball Icon" />
      </div>
    </div>
  );
};
