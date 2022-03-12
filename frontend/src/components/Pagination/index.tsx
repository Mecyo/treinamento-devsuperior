import {ReactComponent as ArrowLeft} from 'assets/img/arrow-left.svg'
import {ReactComponent as ArrowRight} from 'assets/img/arrow-right.svg'
import MoviePage from 'models/MoviePage';
import './styles.css'


type Props = {
  paginator: MoviePage,
  onChange: Function
}

function Pagination({ paginator, onChange } : Props) {

  const nextPage = () => {
    onChange(paginator.number + 1);
  }

  const previousPage = () => {
    onChange(paginator.number - 1);
  }
  
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={paginator.first} onClick={previousPage}>
            <ArrowLeft />
        </button>
        <p>{`${paginator.number + 1} de ${paginator.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={isLastPage(paginator.last)} onClick={nextPage}>
            <ArrowRight />
        </button>
      </div>
    </div>
  );
}

function isLastPage(last: boolean) {
  debugger
  return last;
}

export default Pagination;
