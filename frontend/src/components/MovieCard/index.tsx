import MovieScore from "components/MovieScore";
import Movie from "models/Movie";
import { Link } from "react-router-dom";
import React, { useState } from 'react';


function MovieCard(props:{movie: Movie}) {
  let [movie, setMovie] = useState<Movie>();

  React.useEffect(() => {
      setMovie(props.movie);
  }, [props]);

  if(!movie) {
    movie = new Movie();
  }

  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
