import './Favorites.css';

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


function Favorites({ favorites }) {
    return (
        <div className="favorites">
            <div   
            className={favorites.length === 0 ? 
            ('favorites__header favorites__header-hidden'): 
            
            ('favorites__header')}
            >
                <small><i class="fi fi-rs-heart"></i> YOUR COLLECTION</small>
                <h3>Favorites</h3>
            </div>

            <div className="favorites__cards" key={favorites.key}>
               
                {favorites.map(favorite => {
                 const genreName = favorite.genre_ids?.[0] ? GENRES[favorite.genre_ids[0]] : 'N/A';


                    return (
                        <div className="favorites__card">
                            <div className="favorites__image-card">
                                <img src={`https://image.tmdb.org/t/p/w500/${favorite.poster_path}`} alt={favorite.title} />
                                <small className='movie__rating'>{(favorite.vote_average > 1 ? favorite.vote_average : 1).toFixed(1)}</small>
                            </div>

                            <div className="favorites__card-info">
                                <h3 className="favorites__card-title">{favorite.title}</h3>

                                <div className="favorites__card-meta">
                                    <small className='release__date'>{favorite.release_date ? 
                                        (favorite.release_date.slice(0, 4)): 
                                        ('N/A')}
                                    </small>

                                    <div className="dot"></div>

                                    <small className='movie__genre'>{genreName}</small>
                                </div>
                            </div>
                        </div>
                    )
                })}
               
                
            </div>
        </div>
    )
}

export default Favorites