import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FavoritesPage from "./Pages/FavoritesPage";
import MovieDetails from "./Pages/MovieDetails";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);

  const API_KEY = "e02fb12e797d1b4b49ecb2fff4635bac";

  function toggleFavorite(movie) {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === movie.id,
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter(
          (favorite) => favorite.id !== movie.id
        )
      );
    } else {
      setFavorites([...favorites, movie]);
    }
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    console.log("Stored favorites:", storedFavorites);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    setFavoritesLoaded(true);
  }, []);

  useEffect(() => {
    console.log("saving favorites:", favorites);
    if (!favoritesLoaded) return;

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, favoritesLoaded]);

  async function fetchMovies() {
    setLoading(true);
    setHasSearched(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`,
      );

      const data = await response.json();
      /* 
      console.log(data);
 */
      setMovies(data.results);
    } catch (error) {
      return <p>Error fetching movies {error.message}</p>;
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Routes>

       <Route
   path="/"
   element={
      <HomePage
         searchInput={searchInput}
         setSearchInput={setSearchInput}
         fetchMovies={fetchMovies}
         loading={loading}
         hasSearched={hasSearched}
         movies={movies}
         favorites={favorites}
         toggleFavorite={toggleFavorite}
      />
   }
/>

      <Route
         path="/favorites"
         element={<FavoritesPage favorites={favorites} />}
      />

      <Route 
        path="/movie-details"
        element={<MovieDetails movies={movies} />}
      />
      </Routes>
    </>
  );
}

export default App;
