import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadImage from "./pages/UploadImages"
import { ThemeProvider } from "react-bootstrap";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
  <ThemeProvider>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/upload-image" element={<UploadImage/>} />
      </Routes>
    </BrowserRouter>
  
  </ThemeProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
