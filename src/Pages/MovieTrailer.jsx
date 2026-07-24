import './MovieTrailer.css';

function MovieTrailer({ trailerKey }) {
  // 1. If there's no trailer available from the API, show a message
 /*  if (!trailerKey) {
    return <p className="no-trailer">No trailer available for this movie.</p>;
  } */

  // 2. Render the YouTube iframe safely inside your browser
  return (
    <div className="trailer-container">
      <iframe width={1200} height={400}
        src={`https://www.youtube.com/embed/${trailerKey}?rel=0`}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieTrailer;
