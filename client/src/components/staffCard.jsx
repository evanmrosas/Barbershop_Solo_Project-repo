import React from "react";

const StaffCard = ({ image, name, description }) => {
    return (
        <div className="card mb-4 mt-4">
            <div className="row">
                <div className="col">
                    <img src={image} className="card-img-top" alt={name} style={{ width: "300px", height: "300px" }}/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffCard;