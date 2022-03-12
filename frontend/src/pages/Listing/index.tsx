import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import MovieService from "services/MovieService";
import Movie from "models/Movie";
import { useState } from "react";
import React from "react";

const service = new MovieService();

function Listing() {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [last, setLast] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      const data = await service.findAll(0, 1, 20);
      setMovies(data.content);
      setTotalPages(data.totalPages);
      setTotalElements(data.totalElements);
      setSize(data.size);
      setPageNumber(data.number);
      setLast(data.last);
      setFirst(data.first);
    };
    fetchMovies();
  }, []);

  const list: any[] = [];

  for (const movie of movies) {
    list.push(
      <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
        <MovieCard movie={movie}/>
      </div>
    );
  }

  return (
    <>
      <Pagination totalPages={totalPages} totalElements={totalElements} size={size} pageNumber={pageNumber} last={last} first={first}/>
      <div className="container">
        <div className="row">
          {list}
        </div>
      </div>
    </>
  );
}

export default Listing;
