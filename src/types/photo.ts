export interface PhotoUrls {
	regular: string;
	small: string;
}

export interface Photo {
	id: string;
	alt_description: string;
	urls: PhotoUrls;
}

export interface FetchGalleryPhotosResponse {
	total: number;
	total_pages: number;
	results: Photo[];
}