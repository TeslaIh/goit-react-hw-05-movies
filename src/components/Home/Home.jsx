import { useEffect, useState } from 'react';
import { FetchTrendingMovies } from '../../APImovies/MoviesAPI';
import { ToastContainer, toast } from 'react-toastify';
import {Title, Item, List, StyledLink } from './Home.styled.js';

export default function HomePage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchPictures() {
      try {
        const response = await FetchTrendingMovies();
        setList(response);
      } catch (error) {
        toast.error('Negative, try again!', { position: 'top-center' });
      }
    }
    fetchPictures();
  }, []);

  return (
    <>
      <main>
        <Title>Trending today</Title>
        <List>
          {list.map(item => (
            <Item key={item.id}>
              <StyledLink to={`/movies/${item.id}`}>{item.title}</StyledLink>
            </Item>
          ))}
        </List>
      </main>
      <ToastContainer autoClose={2000} />
    </>
  );
}
