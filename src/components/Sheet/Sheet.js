import "./Sheet.css"; 
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png'; 
function Sheet() {
    return (
        <div className="Sheet">
            <div className="main2" align="center">

                <div className="Cards_About">
                    <div className="cards__inner">
                        <div className="cards__card card">
                            {/* Render Image */}
                            <img src={image1} alt="image1" />

                            {/* Links */}
                            <a className="card__cta cta" href={image1} download="image1.png">
                                Download Sheet 1
                            </a>
                        </div>
                        <div className="overlay cards__inner"></div>
                    </div>

                    <div className="cards__inner">
                        <div className="cards__card card">
                            {/* Render Image */}
                            <img src={image2} alt="image2" />

                            {/* Links */}
                            <a className="card__cta cta" href={image2} download="image2.png">
                                Download Sheet 2
                            </a>
                        </div>
                        <div className="overlay cards__inner"></div>
                    </div>

                    <div className="cards__inner">
                        <div className="cards__card card">
                            {/* Render Image */}
                            <img src={image3} alt="image3" />

                            {/* Links */}
                            <a className="card__cta cta" href={image3} download="image3.png">
                                Download Sheet 3
                            </a>
                        </div>
                        <div className="overlay cards__inner"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Sheet;
