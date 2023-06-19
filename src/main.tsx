import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { KBarWrapper } from "./components/command-bar";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa07zE09ONmDK-UtdFJeug2oPoWy5Lcbk",
  authDomain: "awesome-react-navbar.firebaseapp.com",
  projectId: "awesome-react-navbar",
  storageBucket: "awesome-react-navbar.appspot.com",
  messagingSenderId: "71219047347",
  appId: "1:71219047347:web:82950dedc2ae77b85879c6",
  measurementId: "G-EYP11S18BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <KBarWrapper>
      <App />
    </KBarWrapper>
  </React.StrictMode>
);
