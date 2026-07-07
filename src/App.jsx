import Hero from './components/Hero';
import MovieList from './components/MovieList';
import { useState } from 'react';
import './App.css'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "e02fb12e797d1b4b49ecb2fff4635bac";

  async function fetchMovies() {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 4000));

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`
      );

      const data = await response.json();
/* 
      console.log(data);
 */
      setMovies(data.results);

    } catch(error) {
      return (
        <p>Error fetching movies {error.message}</p>
      )

    } finally {
      setLoading(false)
    }
  } 
    

  return (
    <>
      <Hero 
      searchInput={searchInput} 
      setSearchInput={setSearchInput} 
      fetchMovies={fetchMovies

      }
      />

       {loading ? (
         <div className='loading__texts'>
            <h4 className='loading__header'>Finding your films</h4>

            <div className='loaders'>
              <div className='loader__el'></div>
              <div className='loader__el'></div>
              <div className='loader__el'></div>
            </div>
         </div>
    ) : (
      <MovieList movies={movies} />
    )}
    </>
  )
}

export default App