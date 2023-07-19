import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyANfaqXrBMN0oytcapRH97lU6kKOeOK_I8",
  authDomain: "fir-12-beb6e.firebaseapp.com",
  projectId: "fir-12-beb6e",
  storageBucket: "fir-12-beb6e.appspot.com",
  messagingSenderId: "1032567989313",
  appId: "1:1032567989313:web:6cf16c9cf99c54600c92c0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
