import { ReactComponent as StarFull } from "assets/img/star-full.svg";
import { ReactComponent as StarHalf } from "assets/img/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/img/star-empty.svg";
import "./styles.css";

type Props = {
  score: number
} 

function MovieStars({ score } : Props) {

  const list: any[] = [];

  for (var i=1; i < 6; i++) {
    list.push(
      isHalf(i, score) ? <StarHalf key={i} /> : isFull(i, score) ? <StarFull  key={i}/> : <StarEmpty  key={i}/>
    );
  }

  return (
    <div className="dsmovie-stars-container">
      {list}
    </div>
  );
}

function isHalf(position = 0, starScore = 0) {
  return position > starScore && (position - 1) < starScore;
}

function isFull(position = 0, starScore = 0) {
  return position < starScore || position === starScore;
}

export default MovieStars;
