import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [casts, setCasts] = useState([]);

  const API_KEY = "e02fb12e797d1b4b49ecb2fff4635bac";

  async function fetchMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`,
      );

      const data = await response.json();

      const directorObj = data.credits?.crew?.find(
        (person) => person.job === "Director",
      );
      setDirector(directorObj ? directorObj.name : "Unkown");

      const castsobj = data.credits.cast.slice(0, 3) || [];
      setCasts(castsobj);

      const trailerObj = data.videos?.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );
      setTrailerKey(trailerObj ? trailerObj.key : null);

      setMovie(data);
    } catch (error) {
      return <h4>Error fetching data: {error}</h4>;
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header />

      <div className="movie__details">
        {/* HEADER / TITLE SECTION */}
        <div className="movie__details-title">
          <small className="movie__details-eyebrow">
            -- FILM INTELLIGENCE REPORT --
          </small>
          <h1 className="movie__details-text">{movie.title}</h1>
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <div className="synopsis__container">
          
          {/* COLUMN 1: POSTER & TRAILER BTN */}
          <div className="movie__details-synopsis">
            <div className="movie__poster">
              <div className="movie__poster-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>

              <div className="movie__details-meta">
                <h4 className="movie-title">{movie.title}</h4>
                <p className="movie__tagline">{movie.tagline}</p>
              </div>
            </div>

            <div className="movie__details-btn">
              <button className="trailer__btn">
                <i className="fi fi-rr-play"></i> WATCH TRAILER
              </button>
            </div>
          </div>

          {/* COLUMN 2: ABSTRACT, GENRES, STANDING */}
          <div className="movie__details-abstract">
            <h4 className="movie__abstract-header">
              <i className="fi fi-rr-document"></i> ABSTRACT / SYNOPSIS
            </h4>

            <div className="movie__overview">
              <p className="movie__overview-text">{movie.overview}</p>
            </div>

            <div className="movie__genre">
              <h4 className="movie__tags-header">
                <i className="fi fi-rr-brand"></i> CINEMATIC TAGS
              </h4>

              <div className="movie__tags">
                {movie.genres?.map((genre) => (
                  <p key={genre.id} className="movie__genre-text">
                    {genre.name}
                  </p>
                ))}
              </div>

              <div className="movie__standing">
                <div className="movie__standing-score">
                  <div className="movie__score-eyebrow">
                    <small className="movie__score-text">SCORE</small>
                  </div>
                  <div className="movie__score-value">
                    <h4>{movie.vote_average?.toFixed(1)}</h4>
                    <span>/10</span>
                  </div>
                </div>

                <div className="movie__popularity">
                  <div className="movie__popularity-eyebrow">
                    <small className="movie__popularity-text">POPULARITY</small>
                  </div>
                  <p>{Math.round(movie.vote_average * 10)}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: METRICS, CAST, PROD COMPANIES */}
          <div className="movie__metrics">
            <h4 className="movie__metrics-header">
              <i className="fi fi-rr-chart-histogram"></i> MOVIE_METRICS
            </h4>

            <div className="movie__director">
              <small className="movie__director-text">DIRECTOR</small>
              <p className="movie__director-name">{director}</p>
            </div>

            <div className="movie__realease-date">
              <small className="release__date-eyebrow">RELEASE DATE</small>
              <p className="release__date">{movie.release_date}</p>
            </div>

            <div className="movie__runtime">
              <small className="movie__runtime-eyebrow">RUNTIME</small>
              <p className="movie__runtime-time">{movie.runtime} MINUTES</p>
            </div>

            <div className="movie__casts">
              <small className="movie__casts-eyebrow">PRIMARY CAST</small>
              <div className="movie__cast-container">
                {casts.map((cast) => (
                  <div key={cast.id} className="movie__cast-item">
                    <p className="movie__cast-name">{cast.name}</p>
                    <p className="movie__cast-role">
                      {cast.known_for_department}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="movie__production-companies">
              <small className="movie__production-eyebrow">
                PRODUCTION COMPANIES
              </small>
             {/*  <div className="production__companies-logo">
                {movie.production_companies?.map((company) =>
                  company.logo_path ? (
                    <img
                      key={company.id}
                      src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                      alt={company.name}
                      className="logo__img"
                    />
                  ) : (
                    <span key={company.id}>{company.name}</span>
                  )
                )}
              </div> */}
            </div>
          </div>

        </div> {/* END OF .synopsis__container */}
      </div> {/* END OF .movie__details */}    </>
  );
}

export default MovieDetails;
