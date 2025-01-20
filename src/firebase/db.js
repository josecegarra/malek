import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";


const db = getFirestore(app);

export const getItems = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = []

    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    });

    setItems(items)

}

export const getItemsByCategory = async (category, setItems) => {
    const q = query(collection(db, "items"), where("category", "==", category));
    const items = []

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    });

    setItems(items)
}

export const getItem = async (id, setItem) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setItem(docSnap.data())
    } else {
        console.log("No such document!");
    }
}


export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
