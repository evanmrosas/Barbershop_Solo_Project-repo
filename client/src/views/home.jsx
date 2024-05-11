import NavBar from "../components/navBar";
import barberPic1 from '../imgs/barberpic1.webp'

const Home = () =>{
    return(
        <div>
            <NavBar/>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={barberPic1} alt="First slide" style={{ width: '900px', height: '400px' }} />
                    </div>
                    {/* Add more carousel items here if needed */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Home;
