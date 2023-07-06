import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBftvATlLOZxBjuFCsOKxE66awJ7c0llAo",

  authDomain: "cmf-portfolio2.firebaseapp.com",

  projectId: "cmf-portfolio2",

  storageBucket: "cmf-portfolio2.appspot.com",

  messagingSenderId: "291956370007",

  appId: "1:291956370007:web:89975d0d06fff768541112",

  measurementId: "G-J2712E6BPZ"

};

export const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
