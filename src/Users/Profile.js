import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            Profile Bro to list username and email
            Input Form
            first_name
            last_name
            phone_number
            <br /><br />
            localstorage item
            <br /><br />
            { localStorage.getItem('user_id')}


        </div>
    )
}

export default Profile;