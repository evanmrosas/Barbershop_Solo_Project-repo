import NavBar from "../components/navBar";
import Form from "../components/form";

const updateBook = () =>{
    return(
        <div className="container">
            <NavBar/>
            <Form type="update"/>
        </div>
    )
}

export default updateBook;