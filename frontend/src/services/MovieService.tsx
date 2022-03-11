import api from "./api.js";
import Configuration from "./configuration";
import Movie from 'models/Movie';

class MovieService {
  config: Configuration;
  constructor() {
    this.config = new Configuration();
  }

  async findAll(offset = 0, number = 2, size = 2): Promise<Array<Movie>> {
    let movies:Array<Movie> = [];

    await api
      .get(`${this.config.MOVIES_COLLECTION_URL}?offset=${offset}&number=${number}&size=${size}`)
      .then((res) => {
        movies = res.data.content;
      });

    return movies;
  }

  avaliar(score: any) {
    api.put(this.config.SCORE_AVALIAR_URL, { score }).then((res) => {
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