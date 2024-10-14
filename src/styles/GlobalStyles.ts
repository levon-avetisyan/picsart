import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --primary-color: #3498db;
        --secondary-color: #666e6e;
        --background-color: #f0f0f0;
        --error-color: #ff0000;
        --light-grey: #f3f3f3;
        --secondary-grey: #ccd3d3;
        --dark-grey: #333333;
        --white: #ffffff;
        --off-white: #f9f9f9;
        --muted-grey: #dddddd;
    }

    body, h1, h2, h3, h4, h5, h6, p, a, button {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        line-height: 1.6;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    button {
        font-weight: 500;
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
