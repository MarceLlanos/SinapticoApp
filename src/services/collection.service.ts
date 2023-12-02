import { firestore } from '@/firebase';
import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	updateDoc,
} from 'firebase/firestore';

export async function addDocument(nameCollection: string, data: any) {
	const collectionPath = collection(firestore, nameCollection);
	const docRef = await addDoc(collectionPath, data);
	return docRef;
}

export async function getDocuments(nameCollection: string) {
	const querySnapshot = await getDocs(collection(firestore, nameCollection));
	return querySnapshot;
}

export async function getDocumentById(nameCollection: string, docId: string) {
	try {
		const docRef = doc(firestore, nameCollection, docId);
		const docSnapshot = await getDoc(docRef);

		if (docSnapshot.exists()) {
			return docSnapshot.data() as DocumentData;
		} else {
			console.warn(`No se encontró el documento con ID: ${docId} en la colección: ${nameCollection}`);
			return null;
		}
	} catch (error) {
		console.error('Error al obtener el documento:', error);
		return null;
	}
}

export async function updateDocument(
	nameCollection: string,
	docId: string,
	data: any
) {
	const docRef = doc(firestore, nameCollection, docId);
	await updateDoc(docRef, data);
}

export async function deleteDocument(nameCollection: string, docId: string) {
	await deleteDoc(doc(firestore, nameCollection, docId));
}
