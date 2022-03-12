import api from "./api.js";
import MoviePage from 'models/MoviePage';
import { MOVIES_COLLECTION_URL, SCORE_AVALIAR_URL } from "utils/configuration";
import Movie from "models/Movie";
import Score from "models/Score";

class MovieService {

  async findById(movieId: string | undefined): Promise<Movie> {
    let response = new Movie();

    await api
      .get(`${MOVIES_COLLECTION_URL}/${movieId}`)
      .then((res) => {
        response = res.data;
      });

    return response;
  }

  async findAll(numberPage: number, pageSize: number): Promise<MoviePage> {
    let response = new MoviePage();

    await api
      .get(`${MOVIES_COLLECTION_URL}?page=${numberPage}&size=${pageSize}&sort=id`)
      .then((res) => {
        response = res.data;
      });

    return response;
  }

  avaliar(score: Score) {
    return api.put(SCORE_AVALIAR_URL, score);
  }
};

export default MovieService;