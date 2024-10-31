import { useEffect, useMemo, useRef, useState } from 'react'
import fetchGalleryPhotos from './api/photos-api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

import './App.css';
import { Toaster } from 'react-hot-toast';
import { Photo } from './typess';


const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [queryValue, setQueryValue] = useState<string>('');
	const [gallery, setGallery] = useState<Photo[]>([]);
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);
	const [modalImage, setModalImage] = useState<string>('');
	const [altDescription, setAltDescription] = useState<string>('');
	const [totalPages, setTotalPages] = useState<number>(0);
	



	const ref = useRef<HTMLDivElement>(null);


	useEffect(() => {
		
		if (queryValue === '') return;

		const getData = async () => {
			
			try {
				setIsLoading(true);
				setIsError(false);
				const data = await fetchGalleryPhotos(queryValue, page);
				console.log('data: ', data);
				if (data.total === 0) return;
				setGallery((prevGallery) => {
					return [...prevGallery, ...data.results];
				});
				setTotalPages(data.total_pages);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		
		};
		getData();
	}, [page, queryValue]);

	const handleQuery = (newQuery: string) => {
		setQueryValue(newQuery);
		setGallery([]);
		setPage(1);
		
	};
	
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	const modalStateData = (src: string, alt: string) => {
		setModalImage(src);
		setAltDescription(alt);
	};

	const handleLoadMore = () => {
		setPage(page + 1);
	};
	
	const isActive = useMemo(() => page === totalPages, [page, totalPages]);



  return (
	<div ref={ref}> 
		<SearchBar onSubmit={handleQuery} />
		{isLoading && <Loader/>}
	   {isError && <ErrorMessage />}
	   
	   <ImageGallery
					gallery={gallery}
					openModal={openModal}
					modalStateData={modalStateData}
				/>
					<ImageModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				src={modalImage}
				alt={altDescription}
			/>
			{gallery.length > 0 && !isLoading && !isError && (
				<LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
			)}
			<ImageModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				src={modalImage}
				alt={altDescription}
			/>
			<Toaster position='top-right' reverseOrder={true} />
	</div>
  )
}

export default App