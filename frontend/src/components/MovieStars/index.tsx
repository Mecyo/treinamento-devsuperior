import { ReactComponent as StarFull } from "assets/img/star-full.svg";
import { ReactComponent as StarHalf } from "assets/img/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/img/star-empty.svg";
import "./styles.css";
import { useState } from "react";
import React from 'react';

function MovieStars(props:{score: number}) {
  const [starScore, setScore] = useState(0);

  React.useEffect(() => {
      setScore(props.score);
  }, [props]);

  const list: any[] = [];

  for (var i=1; i < 6; i++) {
    list.push(
      isHalf(i, starScore) ? <StarHalf /> : isFull(i, starScore) ? <StarFull /> : <StarEmpty />
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
