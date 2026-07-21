import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [director, setDirector] = useState(null);

  const API_KEY = "e02fb12e797d1b4b49ecb2fff4635bac";

  async function fetchMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      );

      const data = await response.json();

      setMovie(data);

        const directors = await fetch(
        `https://api.themoviedb.org/3/movie/](https://api.themoviedb.org/3/movie/)${id}/credits?api_key=${API_KEY}`
      );

      const directorData = await directors.json();

      setDirector(directorData);
    } catch (error) {
      console.log(error);
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

      {console.log(movie)}
      {console.log(director)}

     <div className="movie__details">
            <div className="movie__details-title">
                <small className="movie__details-eyebrow">
                    -- FILM INTELLIGENCE REPORT --
                </small>

                <h1>{movie.title}</h1>
            </div>

            <div className="movie__details-synopsis">
            <div className="movie__poster">.

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

            <div className="movie__details-abstract">
                <h4 className="movie__abstract-header"><i className="fi fi-rr-document"></i> ABSTRACT / SYNOPSIS</h4>

                <div className="movie__overview">
                    <p className="movie__overview">{movie.overview}</p>
                </div>

                <div className="movie__genre">
                    <h4 className="movie__tags-header">
                        <i className="fi fi-rr-brand"></i> CINEMATIC TAGS
                    </h4>

                    <div className="movie__tags" key={movie.id}>
                        {movie.genres.map(genre =>{
                            return (
                            <p key={genre.id} 
                            className="movie__genre-text"
                            >
                                {genre.name}
                            </p>
                            )
                        })}
                    </div>

                    <div className="movie__standing">
                        <div className="movie__standing-score">
                            <div className="movie__score-eyebrow">
                                <small className="movie__score-text">SCORE</small>
                            </div>

                            <div className="movie__score-value">
                                <h4>{movie.vote_average.toFixed(1)}</h4>
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

            <div className="movie__metrics">
                <h4 className="movie__metrics-header"><i class="fi fi-rr-chart-histogram"></i> MOVIE_METRICS</h4>
            </div>
      </div>
    </>
  );
}

export default MovieDetails;
