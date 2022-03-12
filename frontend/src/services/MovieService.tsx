import api from "./api.js";
import Movie from 'models/Movie';
import { MOVIES_COLLECTION_URL, SCORE_AVALIAR_URL } from "utils/configuration";

class MovieService {

  async findAll(offset = 0, number = 2, size = 2): Promise<Array<Movie>> {
    let movies:Array<Movie> = [];

    await api
      .get(`${MOVIES_COLLECTION_URL}?offset=${offset}&number=${number}&size=${size}&sort=id`)
      .then((res) => {
        movies = res.data.content;
      });

    return movies;
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