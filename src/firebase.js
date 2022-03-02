import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCO1y-8FLBT--yv4JtbvRcRcSD_2TrFZfE",
    authDomain: "streamapp-c03d7.firebaseapp.com",
    projectId: "streamapp-c03d7",
    storageBucket: "streamapp-c03d7.appspot.com",
    messagingSenderId: "903665570977",
    appId: "1:903665570977:web:ba6ff737eea221c52b4ce0",
    measurementId: "G-HPTYGLSHD3"
  };

firebase.initializeApp(firebaseConfig);  
const storage = firebase.storage();

export default storage;