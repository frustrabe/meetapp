import { createContext, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const = FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = setuseState([]);

    function addFavoriteHandler(favoriteMeetups) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    };

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    function

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
};