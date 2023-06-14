import { initializeApp } from "firebase/app";
import {
	getAuth,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import {
	doc,
	setDoc,
	getDoc,
	getFirestore,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCGEKVVDmhvhUhUjBiJBc4RZe-rFjbrfRk",
	authDomain: "ecommerce-1-1acc6.firebaseapp.com",
	projectId: "ecommerce-1-1acc6",
	storageBucket: "ecommerce-1-1acc6.appspot.com",
	messagingSenderId: "63305936837",
	appId: "1:63305936837:web:ed2da1862dd8b197b325ac",
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

export async function createUserDocumentFromAuth(user, additionalInfo = {}) {
	if (!user) return;
	const userDocRef = doc(db, "users", user.uid);
	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		const { displayName, email } = user;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
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
export async function signInUserWithEmailAndPassword(email, password) {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
}
export async function signUserOut() {
	return await signOut(auth);
}
export async function onAuthUserStateChangedListener(callback) {
	return await onAuthStateChanged(auth, callback);
}
//adding the collection to the database
export async function addCollectionAndDocuments(collectionKey, objectToAdd) {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectToAdd.forEach((obj) => {
		const docRef = doc(collectionRef, obj.title.toLowerCase());
		batch.set(docRef, obj);
	});
	await batch.commit();
	console.log("done");
}
//this is for getting the document items from database
export async function getCategoriesAndDocuments() {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

}
