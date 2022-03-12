import api from "./api.js";
import MoviePage from 'models/MoviePage';
import { MOVIES_COLLECTION_URL, SCORE_AVALIAR_URL } from "utils/configuration";

class MovieService {

  async findAll(page: MoviePage): Promise<MoviePage> {
    let response = new MoviePage();

    await api
      .get(`${MOVIES_COLLECTION_URL}?number=${page.number}&size=${page.size}&sort=id`)
      .then((res) => {
        response = res.data;
      });

    return response;
  }

  avaliar(score: any) {
    api.put(SCORE_AVALIAR_URL, { score }).then((res) => {
      console.log(res.data);
    });
    //content-type: application/json

    /* {
            "userEmail": "ejsmao@hotmail.com",
            "movieId": 1,
            "value": 3
        }*/
  }
};

export default MovieService;