import NavBar from "../components/navBar";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const AppointmentList = () =>{
    const [apps, setApps] = useState([]);

    const navigate = useNavigate();
    const {id} = useParams();

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

    const deleteHandler = (appointmentId) =>{
        axios.delete(`http://localhost:9999/api/appointments/${appointmentId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="container">
            <NavBar/>
            <div className="container row justify-content-center mt-4">
                {apps.map((appointment, index) => (
                        <div className="card" key={index} style={{width:'50%'}}>
                            <div className="card-body">
                                <h4 className="card-title">{appointment.firstName} {appointment.lastName}</h4>
                                <p className="card-text">
                                    Barber: {appointment.barber}<br />
                                    Service: {appointment.service}<br />
                                    Date: {appointment.date}<br />
                                    Price: ${appointment.price}
                                </p>
                                <Link to={`/appointments/${appointment._id}/edit`} className="btn btn-primary">Edit</Link>
                                <button onClick={() => deleteHandler(appointment._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default AppointmentList;