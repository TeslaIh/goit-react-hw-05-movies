import { useParams } from 'react-router-dom';
import { FilmDetails } from '../APImovies/MoviesAPI';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FilmBlock } from '../Poster/PosterBlock';

export default function FilmDetailsPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await FilmDetails(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Negative, try again!', { position: 'top-center' });
      }
    }
    fetchItem();
  }, [itemId]);

  return (
    <>
      {item && <FilmBlock item={item} />}
      <ToastContainer autoClose={2000} />
    </>
  );
}