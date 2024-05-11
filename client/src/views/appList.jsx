import NavBar from "../components/navBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AppointmentList = () =>{
    const [apps, setApps] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:9999/api/appointments`)
        .then((res) =>{
            console.log(res.data);
            setApps(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }, [])

    return (
        <div className="container">
            <NavBar/>
            <div className="container">
                {apps.map((appointment, index) => (
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h4 className="card-title">{appointment.firstName} {appointment.lastName}</h4>
                                <p className="card-text">
                                    Barber: {appointment.barber}<br />
                                    Service: {appointment.service}<br />
                                    Date: {appointment.date}<br />
                                    Price: ${appointment.price}
                                </p>
                                <Link to={`/update/${appointment._id}`} className="btn btn-primary mr-2">Edit</Link>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default AppointmentList;