import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieCredits } from '../../APImovies/MoviesAPI';
import { ActorScrn, ActorBox } from './Cast.styled.jsx';

export default function Cast () {
    const [actors, setActors] = useState([]);
    const location = useLocation();
    const prevId = location.pathname.slice(8);
    const id = prevId.slice(0, -5);

    useEffect(() => {
        async function FetchActors() {
            try {
                const findActors = await MovieCredits(id);
                setActors(findActors);
            } catch (error) {
                console.log(error);
            }
        }
        FetchActors();
    }, [id]);

    return (
      <>
        {actors !== [] && (
          <ActorBox>
            {actors.map(({ id, profile_path, original_name, character }) => (
              <li key={id}>
                {profile_path ? (
                  <ActorScrn
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt="No image"
                  />
                ) : (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    src="http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png"
                    alt="No image"
                    height={300}
                    width={200}
                  />
                )}
                <div>
                  <p>Name: {original_name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))}
          </ActorBox>
        )}
      </>
    );
}