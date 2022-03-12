import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import MovieService from "services/MovieService";
import { useState } from "react";
import React from "react";
import MoviePage from "models/MoviePage";
import Movie from "models/Movie";

const service = new MovieService();

function Listing() {
  const [page, setPage] = useState<MoviePage>(new MoviePage());
  const [movies, setMovies] = useState<Movie[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      const data = await service.findAll(page);
      let newPage = data;
      setMovies(data.content);

      newPage.content = [];

      setPage(newPage);
    };
    fetchMovies();
  }, [page]);

  return (
    <>
      <Pagination paginator={page}/>
      <div className="container">
        <div className="row">
          {movies.map(movie => (
              <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard movie={movie}/>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Listing;
