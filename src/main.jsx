import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TimerProvider } from './context/TimerContext.jsx'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdm3weHPFpe3Npoo43KpFZaaj9QAWSO6A",
  authDomain: "mensajeria-654c9.firebaseapp.com",
  projectId: "mensajeria-654c9",
  storageBucket: "mensajeria-654c9.appspot.com",
  messagingSenderId: "535900829695",
  appId: "1:535900829695:web:79474484634fc76a2119ca",
  measurementId: "G-WZCR2966H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimerProvider>
    <App />
    </TimerProvider>
  </React.StrictMode>,
)
