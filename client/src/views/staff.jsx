import React from "react";
import NavBar from "../components/navBar";
import StaffCard from "../components/staffCard";
import clarenceImage from "../imgs/clarence.jpeg";
import morrisImage from "../imgs/morris.jpeg";
import sweetsImage from "../imgs/sweets.jpeg"

const Staff = () => {
    return (
        <div className="container">
            <NavBar type="staff"/>
            <h2 className="text-center">Meet the barbers</h2>
            <StaffCard
                image={clarenceImage}
                name="Clarence"
                description="Clarence has been cutting hair for over three decades. He's a true classic 
                barber, having learned the trade from his father who owned a barbershop in their small 
                town. Clarence is known for his traditional techniques and attention to detail. He's a 
                friendly face in the community, always ready with a good joke or story from the old days."
            />
            <StaffCard
                image={morrisImage}
                name="Morris"
                description=" Morris is the youngest barber in the shop, but don't let his age fool 
                you—he's a trendsetter in the industry. Morris is always up-to-date on the latest hair 
                trends and styles, and he's not afraid to experiment with bold new looks. His charismatic 
                personality and creative flair make every appointment with him an experience to remember."
            />
            <StaffCard
                image={sweetsImage}
                name="Sweets"
                description="Sweets is the epitome of a true gentleman. With his impeccable manners and 
                polished appearance, he brings an air of sophistication to the barbershop. Sweets is a 
                master at creating classic, refined looks that never go out of style. He takes pride in 
                providing top-notch service to every client, ensuring they leave feeling confident and 
                well-groomed."
            />
        </div>
    );
};

export default Staff;
