import styles from './style.module.css'

export const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutLeft}>
                <div className={styles.left__first}>
                    <p>Делаем полный <br/> анализ рынка</p>
                </div>
                <div className={styles.left__second}>
                    <p>Разрабатываем <br/> креативные концепции</p>
                </div>
            </div>
            <div className={styles.aboutRight}>
                <div className={styles.right__second}>
                    <p>Вызываем эмоции и желание <br/> купить у ваших клиентов</p>
                </div>
                <div className={styles.right__first}>
                    <p>Даём результат, который <br/> предвосхищает ожидания</p>
                </div>
            </div>
        </section>
    )
}