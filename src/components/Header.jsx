import { Link } from 'react-router';
import './Header.css';

function Header() {
    return (
        <>
            <header className="header">
                <div className="header__meta">
                    <Link to='/' className='header__home-link'>
                        <div className="header__logo">MV</div>
                    </Link> 

                    <div className="header__nav-links">
                        <Link to="/favorites" className="header__nav-link">Favorites</Link>
                        <Link to="/movie-details" className="header__nav-link">Lists</Link>
                        <Link to="#" onClick={(e) => e.preventDefault()} className="header__nav-link">About</Link>
                    </div>
                </div>

                <div className="header__version">
                    <span>V1.4.1</span>
                    <div className='header__version-divider'></div>
                    <Link to="#" onClick={(e) => e.preventDefault()} className='sign__up-link'>Sign up</Link>
                </div>
            </header>
        </>
    )
}

export default Header;