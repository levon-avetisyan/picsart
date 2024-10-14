import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchPhotos from '../hooks/useFetchPhotos';
import useFetchUnsplashPhotos from '../hooks/useFetchUnsplashPhotos';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import {
  GridContainer,
  PexelsSection,
  PhotoItem,
  SearchInput,
  SearchInputContainer,
} from '../styles/MasonryGridStyles';
import {
  UnsplashGridContainer,
  UnsplashSection,
} from '../styles/UnsplashGridStyles';
import { ErrorMessage, Spinner, Title } from '../styles/CommonStyles';
import { debounce } from 'lodash';
import { IUnsplashPhoto, IPhoto } from '../types';

const MasonryGrid: React.FC = () => {
  const getInitialQuery = () => sessionStorage.getItem('searchQuery') || '';
  const [query, setQuery] = useState(getInitialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const {
    photoMap,
    loading: pexelsLoading,
    error: pexelsError,
    fetchMorePhotos,
    setPage,
  } = useFetchPhotos(debouncedQuery);

  const { unsplashPhotos } = useFetchUnsplashPhotos(debouncedQuery);
  useInfiniteScroll(pexelsLoading, fetchMorePhotos, debouncedQuery);

  const pexelsPhotoList = Array.from(photoMap.values());
  const unsplashPhotoList = unsplashPhotos.slice(0, 5);

  const handleSearch = debounce((newQuery: string) => {
    setDebouncedQuery(newQuery);
    setPage(1);
    sessionStorage.setItem('searchQuery', newQuery);
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    handleSearch(newQuery);
  };

  useEffect(() => {
    const savedQuery = sessionStorage.getItem('searchQuery');
    if (savedQuery) {
      setQuery(savedQuery);
      setDebouncedQuery(savedQuery);
    }
  }, []);

  const renderPhotoList = (
    photoList: IUnsplashPhoto[] | IPhoto[],
    isUnsplash: boolean = false
  ) => {
    return photoList.map((photo) => (
      <Link
        to={isUnsplash ? '#' : `/photo/${photo.id}`}
        key={photo.id}
        aria-label={`View details for photo by ${photo.photographer || 'Unknown'}`}
      >
        <PhotoItem $isUnsplash={isUnsplash}>
          <img
            src={photo.src?.medium || 'fallback-image-url.jpg'}
            alt={
              photo.alt || (isUnsplash ? 'Unsplash photo' : 'Photo from Pexels')
            }
          />
        </PhotoItem>
      </Link>
    ));
  };

  return (
    <>
      <SearchInputContainer>
        <SearchInput
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for photos..."
          aria-label="Search for photos"
        />
      </SearchInputContainer>

      {/* Unsplash Photos Section */}
      {debouncedQuery && unsplashPhotoList.length > 0 && (
        <UnsplashSection>
          <Title>Relevant Photos from Unsplash</Title>
          <UnsplashGridContainer>
            {renderPhotoList(unsplashPhotoList, true)}
          </UnsplashGridContainer>
        </UnsplashSection>
      )}

      {/* Pexels Photos Section */}
      <PexelsSection>
        {debouncedQuery && !pexelsLoading && (
          <Title>
            {pexelsPhotoList.length > 0 ? 'Search Results' : 'No Photos Found'}
          </Title>
        )}
        <GridContainer>{renderPhotoList(pexelsPhotoList)}</GridContainer>
      </PexelsSection>

      {pexelsLoading && <Spinner />}
      {pexelsError && <ErrorMessage>{pexelsError}</ErrorMessage>}
    </>
  );
};

export default MasonryGrid;
