import { useState, useEffect, useCallback, useMemo } from 'react';
import api from '../services/api';
import { IPhoto } from '../types';
import { PEXELS_CURATED_URL, PEXELS_SEARCH_URL } from '../constants';

const useFetchPhotos = (query: string = '') => {
  const [photoMap, setPhotoMap] = useState<Map<number, IPhoto>>(new Map());
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isNewQuery, setIsNewQuery] = useState(false);

  // Memoized cache key generator
  const getCacheKey = useMemo(
    () => (query: string, page: number) =>
      `photos_${query || 'curated'}_page_${page}`,
    [query]
  );

  // Helper to update photoMap with new photos
  const updatePhotoMap = useCallback(
    (newPhotos: IPhoto[]) => {
      setPhotoMap((prevMap) => {
        const updatedMap = isNewQuery ? new Map() : new Map(prevMap);
        newPhotos.forEach((photo) => updatedMap.set(photo.id, photo));
        return updatedMap;
      });
      setIsNewQuery(false);
    },
    [isNewQuery]
  );

  // Fetch photos from API or sessionStorage
  const fetchPhotos = useCallback(async () => {
    const cacheKey = getCacheKey(query, page);
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
      updatePhotoMap(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await api.get(
        query ? PEXELS_SEARCH_URL : PEXELS_CURATED_URL,
        {
          params: { query, page, per_page: 15 },
        }
      );
      updatePhotoMap(data.photos);
      sessionStorage.setItem(cacheKey, JSON.stringify(data.photos));
    } catch (error) {
      setError('Failed to load photos. Please try again.');
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  }, [query, page, getCacheKey, updatePhotoMap]);

  // Reset photoMap and page when the query changes
  useEffect(() => {
    setPhotoMap(new Map());
    setIsNewQuery(true);
    setPage(1);
  }, [query]);

  // Fetch photos when query or page changes
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return {
    photoMap,
    loading,
    error,
    fetchMorePhotos: () => setPage((prev) => prev + 1),
    setPage,
  };
};

export default useFetchPhotos;
