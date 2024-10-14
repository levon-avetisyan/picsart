import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 4px solid var(--light-grey);
  border-top: 4px solid var(--secondary-color);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  animation: ${spin} 1s linear infinite;
  margin: 16px auto;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: var(--dark-grey);
  padding: 16px;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  padding: 1px 1px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 1px solid var(--secondary-color);
  background-color: var(--white);
  color: var(--secondary-color);
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  transition:
    border-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: var(--dark-grey);
    color: var(--dark-grey);
  }

  &:focus {
    outline: none;
  }
`;

export const Hr = styled.hr`
  border: 1px solid var(--secondary-grey);
  border-bottom-color: var(--white);
  display: block;
  margin: 10px 0;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 12px 0;
  font-size: 20px;
  font-weight: 400;
`;
