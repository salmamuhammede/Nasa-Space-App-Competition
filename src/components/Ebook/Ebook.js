import ebook from '../../assets/Ebook.jpeg';
function Ebook() {
    return (
        <div className="Ebook">
            <div className="main2" align="center">

                <div className="Cards_About">
                    <div className="cards__inner">
                        <div className="cards__card card">
                            {/* Render Image */}
                            <img src={ebook} alt="Ebook" />

                            {/* Links */}
                            <a className="card__cta cta" href='https://heyzine.com/flip-book/dcd54a59e9.html'>
                                Open the E-book
                            </a>
                        </div>
                        <div className="overlay cards__inner"></div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Ebook;
