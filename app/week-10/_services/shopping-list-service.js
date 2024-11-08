import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc } from "firebase/firestore";

export async function getItems(userId) {

    try {
        const itemsReference = collection(db, "users", userId, "items");
        const itemsQuery = query(itemsReference);
        const itemsSnapshot = await getDocs(itemsQuery);
        let items = [];
        itemsSnapshot.forEach((doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            items.push(thisItem);
        });
        return items;
    } catch (error) {
        
    }
}

export async function addItem(userId, itemObj) {
    try {
        const itemsReference = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(itemsReference, itemObj);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteItem(userId, itemId){
    try {
        const itemsReference = doc(db, "users", userId, "items", itemId);
        await deleteDoc(itemsReference);
    } catch (error) {
        console.log(error);
    }
}