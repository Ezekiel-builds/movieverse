import Favorites from '../components/Favorites';

function FavoritesPage({ favorites }) {
    return (
        <div>
            <Favorites favorites={favorites} />
        </div>
    );
}

export default FavoritesPage;
