import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './styles/CommonStyles';

// Lazy load the pages
const MasonryGrid = React.lazy(() => import('./pages/MasonryGrid'));
const PhotoDetail = React.lazy(() => import('./pages/PhotoDetail'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<MasonryGrid />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </Suspense>
  );
};

export default App;
