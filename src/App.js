import React, { useState, } from "react";
import './App.css';
import { ImageDithering } from "@paper-design/shaders-react";

const BitifyImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <body className="App-header">
    <div>
      <h1>Upload and Display Image</h1>
      {selectedImage && (
        <div className="App-header">
          {/* Display the selected image and apply the dithering shader provided by @paper-design */}
            <ImageDithering onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);}}
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
          <button onClick={ function () {

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
        </div>
      )}
      <br />
      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        className="App-header"
        // Event handler to capture file selection and set an image
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      ></input>
    </div>
    </body>
  );
};

export default BitifyImage;
