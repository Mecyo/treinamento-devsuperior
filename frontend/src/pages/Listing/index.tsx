import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import MovieService from "services/MovieService";
import { useState } from "react";
import React from "react";
import MoviePage from "models/MoviePage";
import Loading from "components/Loading";

const service = new MovieService();

function Listing() {
  const [page, setPage] = useState<MoviePage>(new MoviePage());
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [activeLoading, setActiveLoading] = useState<boolean>(false);


  React.useEffect(() => {
    setActiveLoading(true);
    service.findAll(pageNumber, page.size).then((data) => {
      setPage(data);
      setActiveLoading(false);
    });
  }, [pageNumber, page.size]);

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
  };

  return (
    <>
      <Loading open={activeLoading} />
      <Pagination paginator={page} onChange={handlePageChange} />
      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
