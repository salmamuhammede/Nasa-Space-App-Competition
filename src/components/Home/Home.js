import "./Home.css";
import { Link } from "react-router-dom"; // Import Link for navigation
import ebook from "../../assets/ebook.jpg";
import puzzel from "../../assets/puzzel.jpg";
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
                 <SparkleButton text="Ebook" />
                 </div>
       
            <div className="little">
            <img src={puzzel} alt="logo" style={{ width: "190px", height: "150px" }} />
                <SparkleButton text="Game" /></div>
            <div className="little">
            <img src={coloring} alt="logo" style={{ width: "190px", height: "150px" }} />
                <SparkleButton text="Sheets" /></div>
            <div className="little">
            <img src={team} alt="logo" style={{ width: "190px", height: "150px" }} />
            <Link to="/About"><SparkleButton text="About" /> </Link></div>
            <div className="little"> 
            <img src={robot} alt="logo" style={{ width: "190px", height: "150px" }} />
                <SparkleButton text="AI" /></div>
        </div>
     
    
      </div>
    </div>
  );
}

export default Home;