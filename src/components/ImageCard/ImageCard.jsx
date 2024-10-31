import styles from './ImageCard.module.css';

const ImageCard = ({ alt_description, urls, modalStateData }) => {
	return (
		<div
			className={styles.cardWrapper}
			onClick={() => modalStateData(urls.regular, alt_description)}
		>
			<img
				className={styles.cardImage}
				src={urls.small}
				alt={alt_description}
			/>
			
		</div>
	);
};

export default ImageCard;