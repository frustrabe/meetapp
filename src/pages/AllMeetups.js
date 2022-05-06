import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://images.unsplash.com/photo-1521216774850-01bc1c5fe0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address: 'Letsmeethere 51, 55201 Meetico',
        description: 'Our first meetup as a group, come meet us!',
        alt: 'Meetico'
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://images.unsplash.com/photo-1535063406830-27dfae54262a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address: 'Wemetthere 32, 50531 Vineyard City',
        description: 'This is the second meetup as a group, come and join us!',
        alt: 'Vineyard City'
    },
    {
        id: 'm3',
        title: 'This is a third meetup',
        image:
            'https://i.imgur.com/DsWjDlZ.jpeg',
        address: 'Midstreet 47, 081100 Miragiano',
        description: 'Another one of our great meetups as a group!',
        alt: 'Miragiano'
    },
    {
        id: 'm4',
        title: 'This is a fourth meetup',
        image:
            'https://images.unsplash.com/photo-1619711221192-a077e52222d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address: 'Reuniongade, 31261 Odenok',
        description: 'Will we ever stop meeting up? Come find out!',
        alt: 'Odenok'
    },
    {
        id: 'm5',
        title: 'This is a fifth meetup',
        image:
            'https://images.unsplash.com/photo-1609929987308-185b6ea505c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        address: 'Ulicastreet, 91201 Ulicico',
        description: 'Our final meetup as a group, where were you last time?',
        alt: 'Ulicico'
    },

];

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
}

export default AllMeetupsPage;