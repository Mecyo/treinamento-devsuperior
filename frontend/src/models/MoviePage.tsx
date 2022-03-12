import Movie from './Movie';
class MoviePage {
    constructor() {
        this.content = [];
        this.last = true;
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 10;
        this.number = 0;
        this.first = true;
        this.numberOfElements = 0;
        this.empty = true;
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