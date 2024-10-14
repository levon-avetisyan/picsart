import styled from 'styled-components';

export const GridContainer = styled.div`
  column-count: 5;
  column-gap: 16px;
  padding: 16px;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    column-count: 4;
  }

  @media (max-width: 1024px) {
    column-count: 3;
  }

  @media (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 480px) {
    column-count: 1;
  }
`;

interface PhotoItemProps {
  $isUnsplash?: boolean;
}

export const PhotoItem = styled.div<PhotoItemProps>`
  display: flex;
  width: 100%;
  margin: 0 0 16px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  background-color: transparent;

  &:hover {
    transform: ${({ $isUnsplash }) => ($isUnsplash ? 'none' : 'scale(1.02)')};
    cursor: pointer;
  }

  &:active {
    transform: ${({ $isUnsplash }) => ($isUnsplash ? 'none' : 'scale(0.98)')};
  }

  img {
    width: 100%;
    height: ${({ $isUnsplash }) => ($isUnsplash ? '200px' : '100%')};
    max-width: ${({ $isUnsplash }) => ($isUnsplash ? '100%' : '500px')};
    object-fit: cover;
    border-radius: 8px;
    aspect-ratio: ${({ $isUnsplash }) => ($isUnsplash ? '4 / 3' : 'initial')};
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 16px 24px;
  width: 100%;
  max-width: 500px;
  border-radius: 24px;
  border: 1px solid var(--secondary-color);

  &:focus {
    outline: none;
    border: 1px solid var(--primary-color);
  }
`;

export const PexelsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
