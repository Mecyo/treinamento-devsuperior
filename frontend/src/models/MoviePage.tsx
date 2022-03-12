import Movie from './Movie';
class MoviePage {
    constructor() {
        this.content = [];
        this.last = false;
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 0;
        this.number = 0;
        this.first = false;
        this.numberOfElements = 0;
        this.empty = false;
      };
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
  
export default MoviePage;