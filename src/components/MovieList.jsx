import './MovieList.css';

// TMDB genre reference
const GENRES = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};


function MovieList( { movies, loading } ) {
    return (
        <div className="movie-list">
                {console.log(movies)}

            <div className="movie-list__header">
                <h2>Movie List</h2>
            </div>
                
            <div className="movie-list__container">
                {movies.map(movie => {

                    if(loading) {
                        return (
                            <p>Loading</p>
                        )
                    }

                    // Map first genre ID to name
                    const genreName = movie.genre_ids?.[0] ? GENRES[movie.genre_ids[0]] : 'N/A';
                            
                    return (
                        <div key={movie.id} className="movie-list__card">
                            <div className="movie-list__card-image">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                <small className='movie__rating'>{(movie.vote_average > 1 ? movie.vote_average : 1).toFixed(1)}</small>
                            </div>
                            
                            <div className="movie-list__card-info">
                                <h3 className="movie-list__card-title">{movie.title}</h3>


                                <div className="movie-list__card-meta">
                                    <small className='release__date'>{movie.release_date ? 
                                        (movie.release_date.slice(0, 4)): 
                                        ('N/A')}
                                    </small>

                                    <div className='dot'></div>

                                    <small className='movie__genre'>{genreName}</small>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>    
    )
}

export default MovieList;