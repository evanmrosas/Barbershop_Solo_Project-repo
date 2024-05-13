import {Link} from 'react-router-dom';
import logoImage from "../imgs/logo.jpg";

const NavBar = ({type}) =>{
    return(
        <div className="navbar container" style={{ backgroundColor: 'rgb(28, 70, 20)', display: 'flex', justifyContent: 'center' }}>
            <div className='image mb-3' style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Link to="/">
                    <img src={logoImage} alt="Logo" style={{ width: "75px", height: "100px" }}/>
                </Link>
                <h2 style={{ color: 'white'}}>My-T-Sharp</h2>
            </div>
            <div className=' container links'>
                <Link to="/" className="mx-2" style={{ color: 'white', textDecoration: 'none'}}>Book</Link>
                <Link to="/appointments" className="mx-2" style={{ color: 'white', textDecoration: 'none'}}>My Appointments</Link>
                <Link to="/staff" className="mx-2" style={{ color: 'white', textDecoration: 'none'}}>Staff</Link>
            </div>
        </div>
    )
}

export default NavBar;