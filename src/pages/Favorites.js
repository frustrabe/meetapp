import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';


function FavoritesPage() {
    const favoritesContextObject = useContext(FavoritesContext);

    let content;

    if (favoritesContextObject.totalFavorites === 0) {
        content = <h3> No Favorites? Start by browsing All Meetups.</h3>
    } else {
        content = <MeetupList meetups={favoritesContextObject.favorites} />
    }

    return (
        <section>
            <h1>Favorite Meetups</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;