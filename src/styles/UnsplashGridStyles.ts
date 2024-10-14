import styled from 'styled-components';

export const UnsplashSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: var(--secondary-grey);
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
`;

export const UnsplashGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: 0 16px;
  box-sizing: border-box;
  min-height: 200px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
