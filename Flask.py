from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from keras.preprocessing import image
from PIL import Image
import io

# Create a Flask app
app = Flask(__name__)
CORS(app)

# Load the pre-trained model with joblib
model = joblib.load('my_model.joblib')

# Define the target image size for the model
TARGET_SIZE = (224, 224)
class_names = ['earth', 'jupiter', 'mars', 'mercury', 'neptune', 'saturn', 'uranus', 'venus']
# Endpoint for predictions
@app.route('/predict', methods=['POST'])
def predict():
    print('inside')
    try:
        # Check if an image file is in the request
       
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided.'}), 400

        # Get the image file from the request
        image_file = request.files['image']

        # Open the image using PIL
        img = Image.open(image_file)

        # Preprocess the image
        img = img.resize(TARGET_SIZE)
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize the image

        # Make prediction
        predictions = model.predict(img_array)
        print(predictions)  # Print predictions to the terminal for debugging

        # Get the predicted class and probabilities
        predicted_class = np.argmax(predictions, axis=1)[0]
        prediction_percentages = predictions[0] * 100  # Convert to percentages
        print(class_names[int(predicted_class)])
        # Create a response dictionary with class predictions and their percentages
        response = {
            'predicted_class': class_names[int(predicted_class)],
            'prediction_percentages': prediction_percentages.tolist()
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
