import React, { useState } from "react";
import axios from "axios";
import "./AI.css";
import SparkleButton from "../button/Button";

function AI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictions, setPredictions] = useState(null); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please upload an image");
      return;
    }

    setLoading(true); 

    const formData = new FormData();
    formData.append("image", selectedImage); 

    console.log([...formData]); // Log FormData entries

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data && response.data.predicted_class) {
        setPredictions(response.data); 
        setError(null); 
      } else {
        setError("No predictions returned from the server.");
      }
    } catch (error) {
      setError("Error uploading image. Please try again.");
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="AI">
      <div className="mainAI" align="center">
      <div className="container1">
      <div className="box">
        <h1 className="wordss">AI Image Classifier</h1>
        {/* <p>
          Upload an image and let our AI classify it for you! Get predictions
          along with the confidence level for each class.
        </p> */}

        <div className="upload-section">
          {loading && <div className="loading-message">Uploading...</div>}
          <form onSubmit={handleSubmit} className="odoo">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="upload"
            />
            <SparkleButton text="Upload Image" />
          </form>
        </div>

        <div className="prediction-results">
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              style={{ width: "200px", height: "200px", margin: "20px 0", borderRadius: "15px" }}
            />
          )}

          {predictions && (
            <div>
              <h3 className="wordss">Prediction Results:</h3>
              <p className="wordss">Predicted Class: {predictions.predicted_class}</p>
              <ul>
                {predictions.prediction_percentages.map((percentage, index) => (
                  <li key={index}>
                    Class {index}: {percentage.toFixed(2)}%
                  </li>
                ))}
              </ul>
            </div>
          )}

          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default AI;
