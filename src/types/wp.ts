export interface MediaDetails {
  width: number;
  height: number;
}

export interface WPImage {
  sourceUrl: string;
  altText: string;
  mediaDetails: MediaDetails;
}

export interface PhotoSeriesFields {
  genre: string;
  location: string;
  eventDate: string;
  photoCount: number;
  description: string;
  gear?: string;
  photos?: WPImage[];
}

export interface PhotoSeries {
  id: string;
  slug: string;
  title: string;
  date: string;
  featuredImage?: {
    node: WPImage;
  };
  photoSeriesFields: PhotoSeriesFields;
}

export interface PhotoGenre {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface GetAllSeriesResponse {
  allPhotoSeries: {
    nodes: PhotoSeries[];
  };
}

export interface GetSeriesBySlugResponse {
  photoSeries: PhotoSeries | null;
}

export interface GetGenresResponse {
  photoGenres: {
    nodes: PhotoGenre[];
  };
}
