import { useNavigate } from 'react-router-dom';
import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://meet-app-d9c69-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', { replace: true });
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupsPage;