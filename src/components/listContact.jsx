import React from "react";
import { useState, useEffect } from 'react';
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
          await axios.delete(`https://contact.herokuapp.com/contact/${id}`);
          getData();
        } catch (error) {
          console.log(error);
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
                        <input type="button" value="Delete" onClick={() => deleteData(contact.id)}/>
                        <Link to={`/edit/${contact.id}`}>
                            <input type="submit" value="Edit"/>
                        </Link>
                        
                </div>
                </div>
            </div>
            </div>
        ))}
        
    </>
    )
}

export default ListContact;