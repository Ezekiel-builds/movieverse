import './MovieList.css';

function MovieList( { movies } ) {
    return (
        <div className="movie-list">
                {console.log(movies)}
            <div className="movie-list__header">
                <h2>Movie List</h2>
            </div>
                
            <div className="movie-list__container">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="movie-list__card">
                            <div className="movie-list__card-image">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            </div>
                            
                            <div className="movie-list__card-info">
                                <h3 className="movie-list__card-title">{movie.title}</h3>
                                <p className="movie-list__card-rating"><i class="fi fi-ss-star"></i> / {movie.vote_average?.toFixed(1)}</p>

                                <div className="movie-list__card-meta">
                                    <p className='realease-date'>{movie.release_date ? 
                                        (movie.release_date.slice(0, 4)): 
                                        ('N/A')}
                                    </p>

                                    
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