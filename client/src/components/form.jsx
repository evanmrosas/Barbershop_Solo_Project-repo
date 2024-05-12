import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Form = ({type}) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [barber, setBarber] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState();
    const [creditCard, setCreditCard] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });
    const [errors, setErrors] =useState([])

    const navigate = useNavigate();
    const {id} = useParams();

    const servicePrices = {
        "Cut": 15,
        "Clean Up": 10,
        "Fade": 20,
        "Shave & Haircut": 40,
        "Beard": 10,
        "Kids Cut": 7
    };

    useEffect(() => {
        if (type === "update") {
            axios.get(`http://localhost:9999/api/appointments/${id}`)
                .then((res) =>{
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setBarber(res.data.barber);
                    setService(res.data.service);
                    setDate(res.data.date);
                })
                .catch((err) =>{
                    console.log(err);
                })
        }
    }, [id, type]);

    const firstNameHandler = (e) =>{
        setFirstName(e.target.value);
    }
    const lastNameHandler = (e) =>{
        setLastName(e.target.value);
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value);
    }
    const barberHandler = (e) =>{
        setBarber(e.target.value);
    }
    const serviceHandler = (e) => {
        const selectedService = e.target.value;
        setService(selectedService);
        setPrice(servicePrices[selectedService]);
    }
    const dateHandler = (e) =>{
        setDate(e.target.value);
    }
    const creditCardHandler = (e) => {
        const { name, value } = e.target;
        setCreditCard(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandler = (e) =>{
        e.preventDefault();

        const formData = {firstName, lastName, email, barber, service, date, price, creditCard};

        if (type === "update") {
            axios.patch(`http://localhost:9999/api/appointments/${id}`, formData)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    navigate("/");
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors);
                });
        } else {
            axios.post('http://localhost:9999/api/appointments', formData)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    navigate("/");
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors);
                });
        }
    }

    return(
        <div className="container">
            {type === "update" 
                ?  <h2 className="text-center mt-3 mb-4">Update your appointment</h2>
                :  <h2 className="text-center mt-3 mb-4">Book your next appointment</h2>
            }
            <div className="row">
                <div className="col-sm-8">
                    <form onSubmit={submitHandler}>
                        <div className="col">
                            <div className="row">
                                <h3>Personal Infomration</h3>
                                <div className="row mb-4 mt-3">
                                    <div className="col-sm-6">
                                        <input 
                                        type="text"
                                        className="input"
                                        id="firstName"
                                        value={firstName}
                                        onChange={firstNameHandler}
                                        placeholder="First Name"
                                        style={{ borderColor: errors.firstName ? 'red' : 'initial', width: '300px', height: '50px'}}
                                        />
                                        {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                        type="text"
                                        className="input"
                                        id="lastName"
                                        value={lastName}
                                        onChange={lastNameHandler}
                                        placeholder="Last Name"
                                        style={{ borderColor: errors.lastName ? 'red' : 'initial', width: '300px', height: '50px' }}
                                        />
                                        {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-sm-6">
                                        <input 
                                        type="email" 
                                        className="input"
                                        id="email"
                                        value={email}
                                        onChange={emailHandler}
                                        placeholder="Email"
                                        style={{ borderColor: errors.email ? 'red' : 'initial', width: '300px', height: '50px' }}
                                        />
                                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                        type="date"
                                        className="input"
                                        id="date"
                                        value={date}
                                        onChange={dateHandler}
                                        style={{ borderColor: errors.date ? 'red' : 'initial', width: '300px', height: '50px' }}
                                        />
                                        {errors.date && <p className="text-danger">{errors.date.message}</p>}
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-sm-6">
                                        <select className="custom-select" onChange={serviceHandler} value={service} style={{ borderColor: errors.service ? 'red' : 'initial', width: '300px', height: '50px' }}>
                                            <option value="">Select a service</option>
                                            <option value="Cut">Cut</option>
                                            <option value="Clean Up">Clean Up</option>
                                            <option value="Fade">Fade</option>
                                            <option value="Shave & Haircut">Shave & Haircut</option>
                                            <option value="Beard">Beard</option>
                                            <option value="Kids Cut">Kids Cut</option>
                                        </select>
                                        {errors.service && <p className="text-danger">{errors.service.message}</p>}
                                    </div>
                                    <div className="col-sm-6">
                                        <select className="custom-select" onChange={barberHandler} value={barber} style={{ borderColor: errors.barber ? 'red' : 'initial', width: '300px', height: '50px' }}>
                                            <option value="">Select a barber</option>
                                            <option value="Clarence">Clarence</option>
                                            <option value="Morris">Morris</option>
                                            <option value="Sweets">Sweets</option>
                                            <option value="No Preference">No Preference</option>
                                        </select>
                                        {errors.barber && <p className="text-danger">{errors.barber.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h3>Payment Infomration</h3>
                                <div className="row mb-4 mt-3">
                                    <div className="col-sm-6">
                                        <input 
                                        type="text"
                                        name="cardNumber"
                                        value={creditCard.cardNumber}
                                        onChange={creditCardHandler}
                                        placeholder="Credit Card Number"
                                        style={{ borderColor: errors.cardNumber ? 'red' : 'initial', width: '300px', height: '50px' }}
                                        />
                                        {errors.cardNumber && <p className="text-danger">{errors.cardNumber.message}</p>}
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                        type="text"
                                        name="expirationDate"
                                        value={creditCard.expirationDate}
                                        onChange={creditCardHandler}
                                        placeholder="Exp. Date: MM/YY"
                                        style={{ borderColor: errors.expirationDate ? 'red' : 'initial', width: '300px', height: '50px' }}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-sm-6">
                                        <input 
                                        type="text"
                                        name="cvv"
                                        value={creditCard.cvv}
                                        onChange={creditCardHandler}
                                        placeholder="CVV"
                                        style={{ borderColor: errors.cvv ? 'red' : 'initial', width: '300px', height: '50px' }}
                                        />            
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary mb-2">
                                {type === "update" ? "Update" : "Create"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <h3>Hours</h3>
                    <div>
                        <h5 style={{fontWeight:'normal'}}>Sunday: Closed</h5>
                        <h5 style={{fontWeight:'normal'}}>Monday: 9 am - 6pm</h5>
                        <h5 style={{fontWeight:'normal'}}>Tuesday: 9 am - 6pm</h5>
                        <h5 style={{fontWeight:'normal'}}>Wednesday: 9 am - 6pm</h5>
                        <h5 style={{fontWeight:'normal'}}>Thursday: 9 am - 6pm</h5>
                        <h5 style={{fontWeight:'normal'}}>Friday: 9 am - 1pm</h5>
                        <h5 style={{fontWeight:'normal'}}>Saturday: Closed</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;