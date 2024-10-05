import "./Home.css";
import { Link } from "react-router-dom"; // Import Link for navigation
import ebook from "../../assets/ebook.jpg";
import puzzle from "../../assets/puzzel.jpg";
import robot from "../../assets/robot.jpg";
import team from "../../assets/team.jpg";
import coloring from "../../assets/coloring.jpg";
import SparkleButton from "../button/Button";
// import SparkleButton from "../button/Button";

function Home() {
  return (
    <div className="Home">
      <div className="main" align="center">
            
            <div className="paragraphs">
              <p className="word">Chronicles of Exoplanets</p>
              <p className="word"> Exploration</p>            
            </div>
        
        <div className="Choice_Buttons">

            <div className="little">
            <img src={ebook} alt="logo" style={{ width: "190px", height: "150px" }} />
            <Link to="/Ebook"><SparkleButton text="Ebook" /> </Link></div>
     
            <div className="little">
            <img src={puzzle} alt="logo" style={{ width: "190px", height: "150px" }} />
            <Link to="/Game"><SparkleButton text="Game" /> </Link></div>
            <div className="little">
            <img src={coloring} alt="logo" style={{ width: "190px", height: "150px" }} />
            <Link to="/Sheet"><SparkleButton text="Sheets" /> </Link></div>
            <div className="little">
            <img src={team} alt="logo" style={{ width: "190px", height: "150px" }} />
            <Link to="/About"><SparkleButton text="About" /> </Link></div>

            <div className="little"> 
            <img src={robot} alt="logo" style={{ width: "190px", height: "150px" }} />
                <Link to="/AI"><SparkleButton text="AI" /></Link>
                </div>
        </div>
     
    
      </div>
    </div>
  );
}

export default Home;
