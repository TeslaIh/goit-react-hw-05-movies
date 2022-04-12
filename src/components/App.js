import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import  Style  from './Style/Style';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./HomePage/HomePage.jsx'));
const FilmPage = lazy(() => import('./FilmPage/FilmPage.js'));
const FilmDescrp = lazy(() => import('./FilmDescrp/FilmDescrp.js'));
const Cast = lazy(() => import('./Cast/Cast.js'));
const Views = lazy(() => import('./Views/Views.js'));

export const App = () => {
  return (
    <>
      <Suspense fallback={''}>
        <Routes>
          <Route path="/" element={<Style />}>
            <Route path="home" element={<HomePage />} />
            <Route path="movies" element={<FilmPage />} />

            <Route path="movies/:itemId" element={<FilmDescrp />}>
              <Route path="Cast" element={<Cast />} />
              <Route path="reviews" element={<Views />} />
            </Route>

            <Route path="/" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};