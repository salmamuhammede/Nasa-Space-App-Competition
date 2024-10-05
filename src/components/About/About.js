import "./About.css";
// import { Link } from "react-router-dom"; // Import Link for navigation
import Sara from "../../assets/sara.jpg";
import Salma from "../../assets/salma.jpg";
import Erini from "../../assets/Erini.jpg";
import Abdelrahman from "../../assets/abdelrahman.jpg";
import logo from "../../assets/logor.png";
// import SparkleButton from "../button/Button";

function About() {
    return (
        <div className="About">
            <div className="main2" align="center">
            <img src={logo} alt="logo" style={{ width: "550px", height: "150px" }} />
                <div className="Cards_About">
                <div class="cards__inner">
                    <div class="cards__card card">
                        <img src={Sara} alt="Sara Gamal" />

                        <p class="card__price">Mechanical Power Engineer</p>
                    </div>
                    <div class="overlay cards__inner"></div>
                </div>

                <div class="cards__inner">
                    <div class="cards__card card">
                        <img src={Salma} alt="Salma Muhammed" />

                        <p class="card__price">AI Engineer</p>
                    </div>
                    <div class="overlay cards__inner"></div>
                </div>

                <div class="cards__inner">
                    <div class="cards__card card">
                        <img src={Erini} alt="Erini Hosny" />


                        <p class="card__price">Electronics Engineer</p>
                    </div>
                    <div class="overlay cards__inner"></div>
                </div>

                <div class="cards__inner">
                    <div class="cards__card card">
                        <img src={Abdelrahman} alt="Abdelrahman Essa" />

                        <p class="card__price">Embedded Software Engineer</p>
                    </div>
                    <div class="overlay cards__inner"></div>
                </div>





                </div>
            </div>
        </div>
    );
}

export default About;
