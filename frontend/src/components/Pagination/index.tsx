import {ReactComponent as ArrowLeft} from 'assets/img/arrow-left.svg'
import {ReactComponent as ArrowRight} from 'assets/img/arrow-right.svg'
import MoviePage from 'models/MoviePage';
import './styles.css'


type Props = {
  paginator: MoviePage;
}

function Pagination({ paginator } : Props) {

  return (
    <div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={paginator.first} >
            <ArrowLeft />
        </button>
        <p>{`${paginator.number + 1} de ${paginator.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={paginator.last} >
            <ArrowRight />
        </button>
    </div>
</div>
  );
}

export default Pagination;
