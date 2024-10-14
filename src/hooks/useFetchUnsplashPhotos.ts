import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { IPhoto, IUnsplashPhoto } from '../types';
import { UNSPLASH_API_URL } from '../constants';

const useFetchUnsplashPhotos = (query: string = '') => {
  const [unsplashPhotos, setUnsplashPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUnsplashPhotos = useCallback(async () => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(UNSPLASH_API_URL, {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
        params: {
          query,
          per_page: 15,
        },
      });

      const formattedPhotos: IPhoto[] = response.data.results.map(
        (photo: IUnsplashPhoto) => ({
          id: photo.id,
          src: {
            medium: photo.urls.regular,
          },
          alt: photo.alt_description,
          photographer: photo.user.name,
          width: photo.width,
          height: photo.height,
        })
      );

      setUnsplashPhotos(formattedPhotos);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching Unsplash photos:', error.message);
      }
      setError('Failed to load photos from Unsplash. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchUnsplashPhotos();
  }, [fetchUnsplashPhotos]);

  return { unsplashPhotos, loading, error };
};

export default useFetchUnsplashPhotos;
