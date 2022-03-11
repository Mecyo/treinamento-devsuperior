import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import MovieService from "services/MovieService";
import Movie from "models/Movie";
import { useState } from "react";
import React from "react";

const service = new MovieService();

function Listing() {
  let [movies, setMovies] = useState<Movie[]>();

  React.useEffect(() => {
    const fetchMovies = async () => {
      const data = await service.findAll(0, 1, 20);
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const list: any[] = [];

  if (!movies) {
    movies = [];
  }

  for (const movie of movies) {
    list.push(
      <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
        <MovieCard movie={movie}/>
      </div>
    );
  }

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {list}
        </div>
      </div>
    </>
  );
}

export default Listing;
