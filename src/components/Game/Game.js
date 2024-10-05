import React, { useState, useEffect } from 'react';
import './Game.css';

const Puzzle = () => {
  const rows = 3;
  const cols = 3;
  const [pieces, setPieces] = useState([]);
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = '../../assets/Erini.jpg'; // Replace with your image URL
    image.onload = () => {
      const pieceWidth = image.width / cols;
      const pieceHeight = image.height / rows;

      // Set the puzzle pieces based on the loaded image
      createPuzzlePieces(image, pieceWidth, pieceHeight);
      shufflePuzzle();
    };
  }, []);

  const createPuzzlePieces = (img, pieceWidth, pieceHeight) => {
    const newPieces = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let canvas = document.createElement('canvas');
        canvas.width = pieceWidth;
        canvas.height = pieceHeight;
        let context = canvas.getContext('2d');

        // Draw a portion of the image onto each piece (slice the image)
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
          canvas: canvas.toDataURL(), // Store the canvas as a base64 image string
          originalPosition: row * cols + col,
          currentPosition: row * cols + col,
        });
      }
    }
    setPieces(newPieces);
    setShuffledPieces([...newPieces]);
  };

  const renderPuzzle = () => {
    return shuffledPieces.map((pieceObj, index) => (
      <img
        key={index}
        src={pieceObj.canvas}
        alt={`Piece ${index}`}
        className="puzzle-piece"
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e, index)}
      />
    ));
  };

  const shufflePuzzle = () => {
    let shuffled = [...pieces];
    shuffled.sort(() => Math.random() - 0.5);
    setShuffledPieces(shuffled);
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e, droppedIndex) => {
    e.preventDefault();
    swapPieces(draggedIndex, droppedIndex);
  };

  const swapPieces = (index1, index2) => {
    let temp = [...shuffledPieces];
    [temp[index1], temp[index2]] = [temp[index2], temp[index1]];
    setShuffledPieces(temp);
    checkIfSolved(temp);
  };

  const checkIfSolved = (currentPieces) => {
    let isSolved = currentPieces.every((piece, index) => {
      return piece.originalPosition === index;
    });

    if (isSolved) {
      setTimeout(() => {
        alert("Congratulations! You've solved the puzzle!");
      }, 100);
    }
  };

  return (
    <div>
      <div id="puzzleContainer">
        {renderPuzzle()}
      </div>
      <button onClick={shufflePuzzle}>Shuffle</button>
    </div>
  );
};

export default Puzzle;
