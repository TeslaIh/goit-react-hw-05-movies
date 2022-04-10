import {useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";
import { MoviesView } from '../APImovies/MoviesAPI';

export const Views = () => {
    const [views, setViews] = useState([])
    const location = useLocation();
    const prevId = location.pathname.slice(8);
    const id = prevId.slice(0, -8);

    useEffect(() => {
        async function Views() {
            try {
                const viewItem = await MoviesView(id);
                setViews(viewItem)
            } catch (error) {
                console.log(error)
        }
        };
        Views();
}, [id])

    if (views.length !== 0) {
      return (
        <ul>
          {views.map(({ id, author, content }) => (
            <li key={id}>
              <p>author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <h3>We don`t have any reviews for this movie</h3>;
    }
}
