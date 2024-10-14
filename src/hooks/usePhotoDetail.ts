import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { IPhoto } from '../types';

// Global in-memory cache for photo details
const photoCache = new Map<string, IPhoto>();

const usePhotoDetail = (id: string | undefined) => {
  const [photo, setPhoto] = useState<IPhoto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the photo details from API or cache
  const fetchPhotoDetail = useCallback(async () => {
    if (!id) return; // Exit if no id is provided

    // Return cached photo if available
    if (photoCache.has(id)) {
      setPhoto(photoCache.get(id)!);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await api.get(`https://api.pexels.com/v1/photos/${id}`);
      photoCache.set(id, data); // Cache the photo
      setPhoto(data);
    } catch (err) {
      setError('Failed to fetch photo details');
      console.error('Error fetching photo details:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Trigger fetch when id changes
  useEffect(() => {
    fetchPhotoDetail();
  }, [fetchPhotoDetail]);

  return { photo, loading, error };
};

export default usePhotoDetail;
