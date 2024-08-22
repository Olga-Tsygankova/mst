import styles from './styles.module.css'
import { FoldersTitle } from './FoldersTitle'
import folder1 from '../../assets/Folders/folder1.svg'
import folder2 from '../../assets/Folders/folder2.svg'
import folder3 from '../../assets/Folders/folder3.svg'
import folder4 from '../../assets/Folders/folder4.svg'
import folder5 from '../../assets/Folders/folder5.svg'
import folder6 from '../../assets/Folders/folder6.svg'
import folder7 from '../../assets/Folders/folder7.svg'
import folder8 from '../../assets/Folders/folder8.svg'

export const Folders = () => {
	return (
		<section className={styles.folders}>
			<FoldersTitle />
			<div className={styles.foldersWrapper}>
				<div className={styles.folder1}>
					<img src={folder1} alt="" />
				</div>
				<div className={styles.folder2}>
					<img src={folder2} alt="" />
				</div>
				<div className={styles.folder3}>
					<img src={folder3} alt="" />
				</div>
				<div className={styles.folder4}>
					<img src={folder4} alt="" />
				</div>
				<div className={styles.folder5}>
					<img src={folder5} alt="" />
				</div>
				<div className={styles.folder6}>
					<img src={folder6} alt="" />
				</div>
				<div className={styles.folder7}>
					<img src={folder7} alt="" />
				</div>
				<div className={styles.folder8}>
					<img src={folder8} alt="" />
				</div>
			</div>
		</section>
	)
}
