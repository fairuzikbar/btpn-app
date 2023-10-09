import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

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

    const updateData = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`${url}/${id}`, {
                firstName,
                lastName,
                age,
                photo
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`${url}/${id}`);
        setFirstName(response.data.data.firstName);
        setLastName(response.data.data.lastName);
        setAge(response.data.data.age);
        setPhoto(response.data.data.photo);
    };

    return (
        <>
            <h2>Tambah Kontak</h2>
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
                <input type="submit" id="photo" value="Edit"/>
                </div>
            </form>
        </>
    )
}

export default EditContact;