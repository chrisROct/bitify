import React, { useState, } from "react";
import './App.css';
import { ImageDithering } from "@paper-design/shaders-react";

// Define a functional component named UploadAndDisplayImage
const BitifyImage = () => {
  // Define a state variable to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);



  // Return the JSX for rendering
  return (
    <body className="App-header">
    <div>
      {/* Header */}
      <h1>Upload and Display Image</h1>
      {/* Conditionally render the selected image if it exists */}
      {selectedImage && (
        <div className="App-header"
        >
          
          {/* Display the selected image and apply the dithering shader provided by @paper-design */}
            <ImageDithering
            width={1280}
            height={720}
            image= {URL.createObjectURL(selectedImage)}
            colorBack="#000000"
            colorFront="#ffffff"
            colorHighlight="#ffffff"
            originalColors={false}
            inverted={false}
            type="4x4"
            size={1}
            colorSteps={2}
            fit="contain"
          />
          <button onClick={  function downloadImage() {
            const blob = new Blob([selectedImage], { type: "image/bitmap" });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "bitified.bmp";
            link.click();

            URL.revokeObjectURL(url);
          }}>
          Download bitified image
          </button>
          <br />
          {/* Button to remove the selected image */}
        </div>
      )}
      <br />
      {/* Input element to select an image file */}

      <input
        type="file"
        name="myImage"
        className="App-header"
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          console.log(event.target.files[0]); // Log the selected file
          setSelectedImage(event.target.files[0]); // Update the state with the selected file
        }}
      ></input>
    </div>
    </body>
  );
};

// Export the UploadAndDisplayImage component as default
export default BitifyImage;