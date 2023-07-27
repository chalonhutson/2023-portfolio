import digitalCard from "../assets/images/art/hipsterGW-digital-card.png";
import art01 from "../assets/images/art/art-01.jpg";
import art02 from "../assets/images/art/art-02.jpg";
import art03 from "../assets/images/art/art-03.jpg";
import art04 from "../assets/images/art/art-04.jpg";
import art05 from "../assets/images/art/art-05.jpg";
import art06 from "../assets/images/art/art-06.jpg";

export default function ThreeDArt() {

    const imgArray = [art01, art02, art03, art04, art05, art06];

    return (
        <div>
            <h1>3D Art</h1>
            <div>
                <div>
                    <img width="500px" src={digitalCard} alt="HipsterGW Digital Card" />
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={art01} class="d-block w-100 carouselImg" alt="..." />
                            </div>
                            {imgArray.map((img) => {
                                (
                                    <div class="carousel-item">
                                        <img src={img} class="d-block w-100 carouselImg" alt="..." />
                                    </div>
                                )
                            })}
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
                </div>
            </div>
        </div>
    )
}