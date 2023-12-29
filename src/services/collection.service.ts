import { firestore } from '@/firebase';
import {
	DocumentData,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
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
): Promise<void> {
	try {
		if (!nameCollection || !docId || !data) {
			throw new Error('Parametros invalidos. Por favor ingrese datos validos de nombre de la coleccion, document ID, y de la data.');
		}
		const docRef = doc(firestore, nameCollection, docId);

		await updateDoc(docRef, data);

	} catch (error) {
		throw error;
	}
}

export async function updateDocumentByFieldValue(
	nameCollection: string,
	fieldName: string,
	fieldValue: any,
	data: any
): Promise<void> {
	try {
		if (!nameCollection || !fieldName || fieldValue === undefined || !data) {
			throw new Error('Invalid parameters. Please provide valid collection name, field name, field value, and data.');
		}

		const collectionRef = collection(firestore, nameCollection);

		const q = query(collectionRef, where(fieldName, '==', fieldValue));

		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((docSnap) => {
			const docRef = doc(firestore, nameCollection, docSnap.id);
			updateDoc(docRef, data);
		});

	} catch (error) {
		console.error('Error updating document:', error);
		throw error;
	}
}

export async function deleteDocument(nameCollection: string, docId: string) {
	await deleteDoc(doc(firestore, nameCollection, docId));
}
