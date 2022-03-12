import Movie from "models/Movie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieService from "services/MovieService";
import { validateEmail } from "utils/validate";
import './styles.css'

type Props = {
  movieId: string;
}

const service = new MovieService();

function FormCard({ movieId } : Props) {
  const [movie, setMovie] = useState<Movie>(new Movie());

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchMovie = async () => {
      const data = await service.findById(movieId);
      setMovie(data);
    };
    fetchMovie();
  }, [movieId]);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;
    const idMovie = Number.parseInt(movieId);

    if(!validateEmail(email)) {
      console.log(`O valor: '${email}' não é um tipo válido para e-mail!`);
      return;
    }

    service.avaliar({value: score, userEmail: email, movieId:  idMovie}).then((res) => {
      navigate("/");
    });
  }

  return (
    <div className="dsmovie-form-container">
      <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
