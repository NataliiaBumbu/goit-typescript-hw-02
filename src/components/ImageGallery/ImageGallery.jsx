import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ gallery, openModal, modalStateData }) => {
	return (
		<ul className={styles.itemsContainer}>
			{gallery.map(({ id, alt_description, urls }) => (
				<li className={styles.cardItem} key={id} onClick={openModal}>
					<ImageCard
						urls={urls}
						alt_description={alt_description}
					    modalStateData={modalStateData}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;