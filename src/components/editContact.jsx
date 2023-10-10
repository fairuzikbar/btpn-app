import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditContact = () => {
    const url = 'https://contact.herokuapp.com/contact';
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, [])

    const updateData = async (e) => {
        e.preventDefault();
        try {
            const headers = {
                'Content-Type': 'application/json',
            }
            const data = {
                firstName,
                lastName,
                age,
                photo
            }
            const response = await axios.put(`${url}/${id}`, data, {
                headers: headers
            });
            // Handle the response
            console.log(response.data); // Log the response data if needed
            navigate('/');
        } catch (error) {
            if (error.response) {
                // The server responded with an error status code (e.g., 400)
                console.error("Server Error Data:", error.response.data);
                console.error("Server Error Status:", error.response.status);
            } else if (error.request) {
                // The request was made, but there was no response from the server
                console.error("No Response from Server:", error.request);
            } else {
                // Something else went wrong
                console.error("Error:", error.message);
            }
        }
    };

    const getUserById = async () => {
        const response = await axios.get(`${url}/${id}`);
        setFirstName(response.data.data.firstName);
        setLastName(response.data.data.lastName);
        setAge(response.data.data.age);
        setPhoto(response.data.data.photo);
    };

    return (
        <>
            <h2>Edit Kontak</h2>
            <form onSubmit={updateData}>
                <div className="mb-3">
                <input type="text" className="form-control" id="firstName" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" id="lastName" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="number" className="form-control" id="age" value={age} placeholder="age" onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" id="photo" value={photo} placeholder="Link Photo" onChange={(e) => setPhoto(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="submit" className="mx-1" id="photo" value="Edit"/>
                <Link to={"/"}>
                    <input type="submit" className="mx-1" value="Back"/>
                </Link>
                </div>
            </form>
        </>
    )
}

export default EditContact;