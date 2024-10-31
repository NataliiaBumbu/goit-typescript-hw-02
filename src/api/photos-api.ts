import axios from 'axios';
import { FetchGalleryPhotosResponse } from '../typess';



const ACCESS_KEY = 'qvM6fFRr_jAZxwaq0BKjAuZuPKVXFkVr9LUfheYAVXk';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common ['Authorization'] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.params = {
	per_page: 12,
	orientation: 'landscape',
};

const fetchGalleryPhotos = async (
	query: string,
	page: number
): Promise<FetchGalleryPhotosResponse> => {
	const response = await axios.get('/search/photos', {
		params: {
			query,
			page,
		},
	});

	return response.data;
};

export default fetchGalleryPhotos;