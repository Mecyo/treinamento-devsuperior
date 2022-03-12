import {ReactComponent as ArrowLeft} from 'assets/img/arrow-left.svg'
import {ReactComponent as ArrowRight} from 'assets/img/arrow-right.svg'
import React, { useState } from 'react';
import './styles.css'

function Pagination(props:{totalPages: number, totalElements: number, size: number, pageNumber: number, last: boolean, first: boolean}) {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [last, setLast] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(false);

  React.useEffect(() => {
      setTotalPages(props.totalPages);
      setTotalElements(props.totalElements);
      setSize(props.size);
      setPageNumber(props.pageNumber);
      setLast(props.last);
      setFirst(props.first);
  }, []);

  return (
    <div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={first} >
            <ArrowLeft />
        </button>
        <p>{`${pageNumber + 1} de ${totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={last} >
            <ArrowRight />
        </button>
    </div>
</div>
  );
}

export default Pagination;
