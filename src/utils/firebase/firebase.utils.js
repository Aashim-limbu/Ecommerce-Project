import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0cmWYmyiPEDX8RVUkIanz6p47p5BGgns",
  authDomain: "e-commerce1-db.firebaseapp.com",
  projectId: "e-commerce1-db",
  storageBucket: "e-commerce1-db.appspot.com",
  messagingSenderId: "331797079583",
  appId: "1:331797079583:web:6fe4460d58f871c81e172a",
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();
const db = getFirestore(app);
// const db = getFirestore();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export function signInWithGooglePopup() {
  return signInWithPopup(auth, googleProvider);
}

export async function createUserDocumentFromAuth(user,additionalInfo={}) {
  if (!user) return;
  const userDocRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email} = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (e) {
      console.error("Error while creating the users--> ", e.message);
    }
  }
  return userDocRef;
}
export async function createUserSignInWithEmailNPassword(email, password) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
