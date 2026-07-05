// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTw2NhDzK8xtK2RdGrdwghbfTgjd_8VQ8",
  authDomain: "guide-univercitaire-congo.firebaseapp.com",
  projectId: "guide-univercitaire-congo",
  storageBucket: "guide-univercitaire-congo.firebasestorage.app",
  messagingSenderId: "1019443343506",
  appId: "1:1019443343506:web:264b12633de45fc09df64b",
  measurementId: "G-QT29YV846L"
};

const app = initializeApp(firebaseConfig);

export { app };
