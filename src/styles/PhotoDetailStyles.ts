import styled from 'styled-components';

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PhotoDetailImage = styled.img`
  width: 50%;
  height: auto;
  padding: 16px;
  background-color: var(--white);
  margin-bottom: 16px;
  border: 1px solid var(--secondary-grey);
  box-sizing: border-box;
  max-width: 100%;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 60%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PhotoDetailText = styled.div`
  flex: 1;
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  background: var(--off-white);
  text-align: left;
  margin-top: 0;
  border: 1px solid var(--secondary-grey);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    margin: 0 0 16px;
    font-size: 24px;
    border-bottom: 2px solid var(--muted-grey);
    padding-bottom: 8px;
  }

  p {
    margin: 8px 0;
    font-size: 16px;
    line-height: 1.5;
    color: var(--dark-grey);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DescriptionTitle = styled.h3`
  margin-top: 0;
  font-size: 20px;
  color: var(--dark-grey);
  padding-bottom: 0;
  margin-bottom: 0;
`;
