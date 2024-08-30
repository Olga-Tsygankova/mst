import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import { FoldersTitle } from './FoldersTitle';
import { Folder } from './Folder';

gsap.registerPlugin(ScrollTrigger);

export const Folders = () => {
    useEffect(() => {
        const folders = gsap.utils.toArray(`.${styles.folder}`) as HTMLElement[];

        folders.reverse().forEach((folder, index) => {
            gsap.to(folder, {
                y: -200,    // Поднимает папку вверх
                opacity: 0, // Плавное исчезновение
                duration: 1, // Длительность анимации
                ease: 'power2.inOut', // Плавность анимации
                scrollTrigger: {
                    trigger: folder,
                    start: 'top 50%', // Начало анимации, когда верх элемента пересекает 50% окна
                    toggleActions: 'play none none none', // Запуск анимации
                },
                delay: index * 1 // Задержка перед началом анимации каждой следующей папки
            });
        });
    }, []);

    return (
        <section className={styles.folders}>
            <div className={styles.foldersContent}>
                <FoldersTitle />
                <a href='#'>Получить КП</a>
                <div className={styles.foldersWrapper}>
                    <div className={styles.folder}>
                        <div className={styles.folder1}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Отдел мобильной разработки</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder2}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Креативный отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder3}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>SЕО отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder4}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Отдел развития</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder5}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>HR отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder6}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>IT отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder7}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Отдел медиабаинга</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder8}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Финансовый отдел</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
