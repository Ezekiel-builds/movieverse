import HeroPage from './HeroPage';
import MovieList from '../components/MovieList';

function HomePage({ searchInput, setSearchInput, fetchMovies, loading, hasSearched, movies, setFavorites, toggleFavorite, favorites }) {
    return (
        <>
            <HeroPage
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          fetchMovies={fetchMovies}
        />

        {loading ? (
          <div className="loading__texts">
            <h4 className="loading__header">Finding your films</h4>

            <div className="loaders">
              <div className="loader__el"></div>
              <div className="loader__el"></div>
              <div className="loader__el"></div>
            </div>
          </div>
        ) : hasSearched && movies.length === 0 ? (
          <h4 className="error__message">No matches in the catalog</h4>
        ) : (
          <MovieList
            movies={movies}
            setFavorites={setFavorites}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        )}
        </>
    )
}

export default HomePage;