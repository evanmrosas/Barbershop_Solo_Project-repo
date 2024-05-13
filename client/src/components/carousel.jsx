import barberpic1 from "../imgs/my-t-sharp.jpeg";
import barberpic2 from "../imgs/barberpic1.webp";
import barberpic3 from "../imgs/barberpic3.png"

const Carousel = () =>{
    return(
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={barberpic1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={barberpic2} class="d-block mx-auto" style={{height: "630px", }}alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={barberpic3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default Carousel