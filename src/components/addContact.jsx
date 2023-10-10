import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const AddContact = () => {
    const url = 'https://contact.herokuapp.com/contact';
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate();

    const addData = async(e) => {
        e.preventDefault();
        try {
            await axios.post(url, {
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

    return (
        <>
            <h2>Tambah Kontak</h2>
            <form onSubmit={addData}>
                <div className="mb-3">
                <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="number" className="form-control" id="age" placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" id="photo" placeholder="Link Photo" onChange={(e) => setPhoto(e.target.value)}/>
                </div>
                <div className="mb-3">
                <input type="submit" id="photo" value="Submit"/>
                <Link to={"/"}>
                    <input type="submit" className="mx-1" value="Back"/>
                </Link>
                </div>
            </form>
        </>
    )
}

export default AddContact;