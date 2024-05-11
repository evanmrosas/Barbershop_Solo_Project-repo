import NavBar from "../components/navBar";
import Form from "../components/form";

const Book = () =>{
    return(
        <div className="container">
            <NavBar type="book"/>
            <Form type="new"/>
        </div>
    )
}

export default Book;