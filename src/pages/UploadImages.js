import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import "../css/NewImage.css";

import NewImage from "../components/NewImage";
const UploadImage = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  return (
    <div>
      <NavbarComponent />
      {image ? (
        <NewImage image={image} />
      ) : (
        <div className="prueba container" >
				<h1 >Suba su imagen</h1>
				<br/>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
            type="file"
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
