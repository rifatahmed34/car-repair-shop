// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAauJRRc4SlioIZtu6eUqA6FQqy3i8G1i4",
  authDomain: "car-doctor-f4b72.firebaseapp.com",
  projectId: "car-doctor-f4b72",
  storageBucket: "car-doctor-f4b72.appspot.com",
  messagingSenderId: "199311757785",
  appId: "1:199311757785:web:4a7dee147c0ced4e3dc9c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;