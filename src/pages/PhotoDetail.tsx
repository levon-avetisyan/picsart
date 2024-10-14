import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  PhotoContainer,
  PhotoDetailImage,
  PhotoDetailText,
  DescriptionTitle,
} from '../styles/PhotoDetailStyles';
import { Spinner, BackButton, Hr, ErrorMessage } from '../styles/CommonStyles';
import usePhotoDetail from '../hooks/usePhotoDetail';

const PhotoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { photo, loading, error } = usePhotoDetail(id); // Use custom hook to fetch photo details

  return (
    <PhotoContainer>
      <BackButton onClick={() => navigate(-1)}>back</BackButton>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        photo && (
          <>
            <PhotoDetailImage
              loading="lazy"
              src={photo.src.large}
              alt={photo.alt}
            />
            <PhotoDetailText>
              <DescriptionTitle>Description</DescriptionTitle>
              <Hr />
              <p>Photographer: {photo.photographer}</p>
              <p>
                Original Size: {photo.width} x {photo.height}
              </p>
              <p>
                Download the original photo at:{' '}
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Original Photo
                </a>
              </p>
            </PhotoDetailText>
          </>
        )
      )}
    </PhotoContainer>
  );
};

export default PhotoDetail;
