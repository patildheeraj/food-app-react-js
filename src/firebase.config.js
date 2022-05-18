import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUCQ3vyoqmDvhUP3pL4slHMIlrjt6CG3I",
  authDomain: "restaurant-app-30061.firebaseapp.com",
  databaseURL: "https://restaurant-app-30061-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-30061",
  storageBucket: "restaurant-app-30061.appspot.com",
  messagingSenderId: "360702653831",
  appId: "1:360702653831:web:60372d37749424aa048f22",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
