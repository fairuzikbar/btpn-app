import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListContact = () => {
    const url = 'https://contact.herokuapp.com/contact';
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get(url);
        setData(response.data.data);
    };

    const deleteData = async (id) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
            }
            await axios.delete(`${url}/${id}`, {
                headers: headers
            });
            getData();
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

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
        {data.map((contact) => (
            <div key={contact.id} className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={contact.photo} style={{width: "100px", height: "100px"}} className="img-fluid rounded-circle"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{contact.firstName} {contact.lastName}</h5>
                    <p className="card-text">{contact.age} year</p>
                    <Link to={`/edit/${contact.id}`}>
                        <input type="submit" className="mx-1" value="Edit"/>
                    </Link>
                    <input type="button" value="Delete" className="mx-1" onClick={() => deleteData(contact.id)}/>                        
                </div>
                </div>
            </div>
            </div>
        ))}
    </>
    )
}

export default ListContact;