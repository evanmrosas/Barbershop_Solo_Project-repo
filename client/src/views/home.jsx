import NavBar from "../components/navBar";
import Form from "../components/form";
import Carousel from "../components/carousel";

const Home = () =>{
    return(
        <div className="container">
            <NavBar/>
            <div className="mt-4">
                <Carousel/>
            </div>
            <Form type="new"/>
        </div>
    )
}

export default Home;