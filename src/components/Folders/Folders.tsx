import styles from './styles.module.css'
import { FoldersTitle } from './FoldersTitle'
import { Folder } from './Folder'

export const Folders = () => {
	return (
		<section className={styles.folders}>
			<FoldersTitle />
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
		</section>
	)
}
