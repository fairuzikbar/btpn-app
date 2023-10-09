import React from "react";

const listContact = (prop) => {
    const { fullName, age, photo } = prop;

    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={photo} style={{width: "100px", height: "100px"}} className="img-fluid rounded-circle"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{fullName}</h5>
                <p className="card-text">{age} year</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default listContact;