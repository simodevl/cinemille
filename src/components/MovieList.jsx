// hooks
import { useState, useEffect } from "react";
import { useTMDbMovies } from "../hooks/useTMDbMovies";
//components
import { Link } from "react-router-dom";
//styles
import "../styles/movie-list.scss";

const MovieList = () => {
  // handles dates
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    const timerId = setInterval(updateDate, 86400000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // handles movies' data
  const { movies, isLoading, error } = useTMDbMovies();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {movies.map((movie, index) => (
        <div key={index} className="banner">
          <div className="banner-img">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt={`${movie.title} poster`} />
            </Link>
          </div>
          <div className="banner-info">
            <Link to={`/movie/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
            <p>
              Uscita: <span>{formatDate(movie.releaseDate)}</span>
            </p>
            <p>
              Fine Programmazione: <span>{formatDate(movie.endDate)}</span>{" "}
            </p>
            <div className="banner-other">
              <p>
                Oggi{" "}
                <span>
                  {currentDate.toLocaleDateString("it-IT", {
                    weekday: "short",
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </p>
              <Link to={`/movie/${movie.id}`}>
                <button>
                  Sala | <span>{index + 1}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
