import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { handleChange } from './authenticationFunctions.js';
import './Profile.css';

function Profile() {
    /*

    1) Copy Register for Profile values first name, last name, phone number
    2) Update authenticationFunctions handleChange to include first name, last name, phone number
    3) Update authenticationFunctions handleUpdateSubmit specifically for fn, ln, pn
    4) Set handleUpdateSubmit to create an axiosinstance to call the api to update a profile with a pk value
    5) In Django, create an API to update a profile in urls.py, views.py, serializer.py, model.py (?)

    */

    const [pnumber, setPnumber] = useState("");

    return (
        <div className="profile">
            Profile Bro to list username and email
            Input Form
            first_name
            last_name
            phone_number


        </div>
    )
}

export default Profile;