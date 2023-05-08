import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYo5nY-a_-DCNUM7bobAvPSFXpnaj0NgM",
  authDomain: "cmf-portfolio.firebaseapp.com",
  projectId: "cmf-portfolio",
  storageBucket: "cmf-portfolio.appspot.com",
  messagingSenderId: "437444663554",
  appId: "1:437444663554:web:6fd745ecfc9729803b8a1b",
  measurementId: "G-D4B8B5G8WW"
};

export const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);
export const db = getFirestore(app);