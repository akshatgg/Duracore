// services/firestoreService.js
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const FORM_COLLECTION = "formSubmissions";

export const saveFormData = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, FORM_COLLECTION), formData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving form data:", error);
    return { success: false, error };
  }
};
