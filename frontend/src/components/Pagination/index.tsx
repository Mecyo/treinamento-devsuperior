import {ReactComponent as ArrowLeft} from 'assets/img/arrow-left.svg'
import {ReactComponent as ArrowRight} from 'assets/img/arrow-right.svg'
import './styles.css'
function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
            <ArrowLeft />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
            <ArrowRight />
        </button>
    </div>
</div>
  );
}

export default Pagination;
