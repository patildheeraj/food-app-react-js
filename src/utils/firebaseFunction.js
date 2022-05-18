import {
  setDoc,
  doc,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new item in firebase
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// fetching data from firebase
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
