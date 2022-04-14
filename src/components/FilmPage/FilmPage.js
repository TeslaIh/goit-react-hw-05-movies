import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchMovie } from '../../APImovies/MoviesAPI';
import {
  SearchbarHead,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar';
import { MdError } from 'react-icons/md';
import { FaSearchengin } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function FilmPage() {
    const [film, setFilm] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: e.currentTarget.elements.query.value });

        if (e.currentTarget.elements.query.value.toLowerCase().trim() === '') {
            toast('Empty request!', { position: 'top-center' });
            return;
        }
        e.currentTarget.reset();
    };

    useEffect(() => {
        if (query === null) {
            return;
        }

        async function SearchMovies() {
            try {
                const cardSearch = await SearchMovie(query);
                if (cardSearch.length === 0) {
                    toast('By your request no results', { icon: (<MdError size={26} />), });
                    
                }
                setFilm(cardSearch);
            } catch (error) {
                toast.error('Negative, try again', { position: 'top-center' });
            }
        }
        SearchMovies();
    }, [query]);

    return (
      <>
        <SearchbarHead>
          <SearchForm onSubmit={handleSubmit}>
            <SearchFormButton type="submit">
              <FaSearchengin size={26} /> <span>Search</span>
            </SearchFormButton>

            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search film"
              name="query"
            />
          </SearchForm>
        </SearchbarHead>

        {film.length > 0 && (
          <ul>
            {film.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
}

