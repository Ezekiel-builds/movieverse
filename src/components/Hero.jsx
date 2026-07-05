
import './Hero.css';

function Hero({ searchInput, setSearchInput, fetchMovies }) {
 

    function printInput(e) {
        setSearchInput(e.target.value)
        console.log(searchInput);
    }

    function handleKeyDown(e) {
        if(e.key === "Enter") {
            fetchMovies()
            
        }

        if (e.key === "Esc" ) {
           setSearchInput('')
        }
    }

    return (
        <div className="hero">
            <div className="hero__eyebrow">
                <div className="hero__eyebrow-box"></div>
                <p className="hero__eyebrow-text"> -- FILM INTELLIGENCE PLATFORM</p>
            </div>

            <div className="hero__header-box">
                <h1 className="hero__header">MovieVerse</h1>
                <p className="hero__subtext">A structured catalog for every film ever made. Search, explore, and build collections with precision.</p>
            </div>

            <div className="hero__search-input">
                <input className="search__input" 
                type="text" 
                placeholder="Search for a movie...." 
                onChange={printInput} 
                onKeyDown={handleKeyDown}
                value={searchInput}
                />
                
                <button className="hero__btn">Search</button>
            </div>

            <div className="hero__genre">
                <p className="hero__genre-cta">Genres:</p>

                <div className="hero__genre-box">
                    <p className="genre__text">Drama</p>
                    <p className="genre__text">Action</p>
                    <p className="genre__text">Comedy</p>
                    <p className="genre__text">1990s</p>
                    <p className="genre__text">Documentry</p>
                </div>
            </div>
        </div>
    )
};

export default Hero;