# PicsArt Project

## Overview

PicsArt is a React-based application that allows users to search and display photos from the Pexels and Unsplash APIs.
The project is built with TypeScript, uses `styled-components` for styling, and includes several hooks for fetching
photos and handling infinite scrolling.

## Features

- **Search Photos**: Search for photos from Pexels and Unsplash.
- **Infinite Scrolling**: Fetch more photos when scrolling down.
- **Lazy Loading**: Dynamically load components and images for performance.
- **Debounced Search**: Debounce the search input to avoid unnecessary API requests.
- **Responsive Layout**: Grid-based photo layout using styled-components.

## Tech Stack

- **React 18**: UI library for building the user interface.
- **TypeScript**: For static type checking.
- **Axios**: For making HTTP requests to APIs.
- **Styled-Components**: For styling components.
- **React Router**: For routing between pages.
- **Lodash**: Utility library used for debouncing input.
- **Webpack**: Module bundler with compression plugins for production.
- **Prettier**: Code formatting.
- **ESLint**: Linting tool for code quality.

## Installation and Setup

### Prerequisites

Ensure you have Node.js (>= 14.x) and npm installed on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/levon-avetisyan/picsart.git
   cd picsart

# Project Setup Guide

## Install the dependencies:

```bash
npm install
```

## Start the development server:

```bash
npm start
```

## To build the project for production:

```bash
npm run build
```

## Project Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run test`: Runs the tests.
- `npm run lint`: Lints the code using ESLint.
- `npm run format`: Formats the code using Prettier.
- `npm run eject`: Ejects the project from react-scripts for full configuration control.

## Environment Variables

To run the project locally, you'll need API keys for Pexels and Unsplash. You can add these keys to the `.env` file at
the root of the project:

```makefile
REACT_APP_PEXELS_API_KEY=ycPVr5bjPEUuHsixnOiwS89GOUh4cbUUAiELUBbk0Du97Zf5z5CHqPb6
REACT_APP_UNSPLASH_API_KEY=tAOOfZn4E6lrQawIgmEQrBvknDQXO7i0TEWGlT57ePY
```

## Folder Structure

```bash
src/
├── constatns/          # Constants
├── hooks/              # Custom hooks for API fetching and infinite scroll
├── pages/              # Routes/pages
├── services/           # API service directory
├── styles/             # Styled-components for styling
├── types/              # TypeScript types and interfaces
├── App.tsx             # Main app entry
└── index.tsx           # Entry point to the React app
```

## Code Quality

This project uses ESLint and Prettier for code linting and formatting:

- **Linting**: Run `npm run lint` to check for code quality issues.
- **Formatting**: Run `npm run format` to automatically format code according to the Prettier configuration.

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push your branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License.
