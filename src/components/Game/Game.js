import React, { useState, useEffect } from 'react';
import './Game.css';
import { Link } from "react-router-dom"; // Import Link for navigation
import SparkleButton from "../button/Button";

const episodeData = {
    1: { image: '/images/pegasi.webp', info: "This is the 1st Planet. \
        It's Called 51 Pegasi B. \
        It belongs to the Hot Jupiters. \
        It was the first planet found around a star like our Sun, and that happened in 1995. \
        It goes around its star really fast, it takes only about 4 days to complete one trip! \
        You can find it in the sky in a group of stars called Pegasus, which is about 50 light-years away." },
2: { image: '/images/Proxima.jpg', info: "This is the 2nd Planet. \
      Orbiting the closest star to the Sun, Proxima Centauri, this planet is located just 4.24 light-years away. \
      It belongs to the rocky worlds planets. \
      Proxima b is about 1.17 times the mass of Earth and is located within the star's habitable zone, \
      meaning it could potentially have liquid water on its surface. \
      Its proximity and potential habitability make it a prime candidate for future studies." },
3: { image: '/images/kepler.PNG', info: "This is the 3rd Planet. \
     Kepler-22b, It belongs to the Mini-Neptunes. \
     located about 600 light-years away, is about 2.4 times the size of Earth. \
     It lies within the habitable zone of its star, but due to its size, \
     it is likely a Mini-Neptune with a thick, gaseous." },
4: { image: '/images/trappist.webp', info: "This is the 4th Planet. \
        Its Called TRAPPIST-1d, It belongs to the ocean world exoplanets. \
        Part of the TRAPPIST-1 system, \
        TRAPPIST-1d is located 40 light-years away and is one of the seven rocky planets orbiting a cool dwarf star. \
        It is believed to be smaller than Earth but could potentially have a thick atmosphere and oceans. \
        It lies just outside the habitable zone, \
        which suggests the possibility of liquid water under specific conditions, \
        such as a warm atmosphere or geothermal heating." }
};

const rows = 3;
const cols = 3;

function Game() {
  const [currentPage, setCurrentPage] = useState('home');
  const [episode, setEpisode] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const [pieces, setPieces] = useState([]);
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const startGame = () => setCurrentPage('selectLevel');

  const startEpisode = (episodeNumber) => {
    setEpisode(episodeNumber);
    setCurrentPage('game');
  };

  const goBack = () => setCurrentPage('home');

  const goBackLevel = () => setCurrentPage('selectLevel');

  const closeModal = () => {
    setIsSolved(false);
    setCurrentPage('info');
  };

  useEffect(() => {
    if (episode) {
      const img = new Image();
      img.src = episodeData[episode].image;
      img.onload = () => createPuzzlePieces(img);
    }
  }, [episode]);

  const createPuzzlePieces = (img) => {
    const pieceWidth = img.width / cols;
    const pieceHeight = img.height / rows;

    const newPieces = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const canvas = document.createElement('canvas');
        canvas.width = pieceWidth;
        canvas.height = pieceHeight;
        const context = canvas.getContext('2d');
        context.drawImage(
          img,
          col * pieceWidth,
          row * pieceHeight,
          pieceWidth,
          pieceHeight,
          0,
          0,
          pieceWidth,
          pieceHeight
        );

        newPieces.push({
          canvas: canvas,
          originalPosition: row * cols + col,
          currentPosition: row * cols + col,
        });
      }
    }
    setPieces(newPieces);
    shufflePuzzle(newPieces);
  };

  const shufflePuzzle = (piecesArray) => {
    const shuffled = [...piecesArray].sort(() => Math.random() - 0.5);
    setShuffledPieces(shuffled);
  };

  const handleDragStart = (index) => setDraggedIndex(index);

  const handleDrop = (droppedIndex) => {
    if (draggedIndex !== null) {
      const newShuffledPieces = [...shuffledPieces];
      [newShuffledPieces[draggedIndex], newShuffledPieces[droppedIndex]] = [
        newShuffledPieces[droppedIndex],
        newShuffledPieces[draggedIndex],
      ];
      setShuffledPieces(newShuffledPieces);
      checkIfSolved(newShuffledPieces);
      setDraggedIndex(null);
    }
  };

  const checkIfSolved = (piecesArray) => {
    const isSolved = piecesArray.every(
      (piece, index) => piece.originalPosition === index
    );
    if (isSolved) {
      setIsSolved(true);
    }
  };

  return (
    <div className="game">
      {currentPage === 'home' && (
        <div className="homePage">
          <h1>Welcome to the Exoplanets Puzzle Game</h1>
          <button onClick={startGame}>Start Game</button>
          {/* <Link to="selectLevel"><SparkleButton text="Start" /> </Link> */}
          {/* <Link to="/"><button>Return Home</button> </Link> */}
        </div>
      )}
      {currentPage === 'selectLevel' && (
        <div className="selectLevel">
          <h1>Select an Episode</h1>
          {[1, 2, 3, 4].map((episode) => (
            <button key={episode} onClick={() => startEpisode(episode)}>
              Planet {episode}
            </button>
          ))}
          <button onClick={goBack}>Back to Home</button>
        </div>
      )}
      {currentPage === 'game' && (
        <div className="gameContainer">
          <button onClick={() => shufflePuzzle(pieces)}>Shuffle</button>
          <button onClick={goBackLevel}>Back to Levels</button>
          <div className="puzzleContainer">
            {shuffledPieces.map((piece, index) => (
              <div
                key={index}
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
                draggable
                className="puzzle-piece"
                style={{
                  backgroundImage: `url(${piece.canvas.toDataURL()})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
      {isSolved && (
        <div className="congratsModal">
          <div className="modal-content">
            <img src="/images/GreenCheck.png" alt="Green Checkmark" />
            <h3>Congratulations!</h3>
            <p>You've completed the Planet successfully.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      {currentPage === 'info' && (
        <div className="infoPage">
          <h4>About the Exoplanet</h4>
          <img
            id="dynamic-image"
            src={episodeData[episode].image}
            alt="Dynamic Image"
            width="400"
            height="400"
          />
          <p>{episodeData[episode].info}</p>
          <button onClick={goBackLevel}>Back to Episode Selection</button>
        </div>
      )}
    </div>
  );
}

export default Game;
