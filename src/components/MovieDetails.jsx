//hooks
import { useParams, Link } from "react-router-dom";
import { useTMDbMovie } from "../hooks/useTMDbMovie";
//assets
import { arrow } from "../assets";
//styles
import "../styles/movie-details.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, isLoading, error } = useTMDbMovie(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Link to={"/"}>
        <div className="selection">
          <img src={arrow} alt="Go back" />
        </div>
      </Link>

      <div className="movie-wrapper">
        <div className="movie-banner">
          <img src={movie.poster} alt={`${movie.title} poster`} />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>
              Valutazione: <span>{movie.rating}</span>
            </p>
            <p>
              Uscita: <span>{formatDate(movie.releaseDate)}</span>
            </p>
            <p className="spacer">
              Fine Programmazione: <span>{formatDate(movie.endDate)}</span>
            </p>
            <button>Acquista Ora</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
