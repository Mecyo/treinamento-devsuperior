import MovieStars from "components/MovieStars";
import "./styles.css";


function MovieScore(props:{score: number, count: number}) {

  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {console.log(props.count + ' - ' + props.score)}
        {props.score > 0 ? props.score.toFixed(1) : "-"}
      </p>
      <MovieStars score={props.score}/>
      <p className="dsmovie-score-count">{props.count} avaliações</p>
    </div>
  );
}

export default MovieScore;
