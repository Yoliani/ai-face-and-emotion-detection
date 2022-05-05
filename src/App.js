import { useRef, useEffect } from "react";
import "./App.css";
import * as faceapi from "face-api.js";
import NavbarComponent from "./components/NavbarComponent";
function App() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceDetection();
    });
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const faceDetection = async () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: 940,
        height: 650,
      });

      const resized = faceapi.resizeResults(detections, {
        width: 940,
        height: 650,
      });
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      faceapi.draw.drawDetections(canvasRef.current, resized);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    }, 1000);
  };
  useEffect(() => {
    startVideo();

    videoRef && loadModels();
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <NavbarComponent />
      </div>
      <div className="app">
        <h1 style={{ color: "white" }}>IA - Deteccion de emociones</h1>
        <div className="app__video">
		  <canvas
          style={{ borderRadius: "10px" }}
          ref={canvasRef}
          width="940"
          height="650"
          className="app__canvas"
        />
          <video
            style={{ borderRadius: "10px" }}
            crossOrigin="anonymous"
            ref={videoRef}
            autoPlay
          ></video>
  
        </div>
    
      </div>
    </>
  );
}

export default App;
