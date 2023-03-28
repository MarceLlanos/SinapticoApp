// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBky4oL3uyXVuiKvLEyYtDx-famKqsLyrk',
	authDomain: 'sinapticoapp-ade4c.firebaseapp.com',
	databaseURL: 'https://sinapticoapp-ade4c-default-rtdb.firebaseio.com',
	projectId: 'sinapticoapp-ade4c',
	storageBucket: 'sinapticoapp-ade4c.appspot.com',
	messagingSenderId: '547815924331',
	appId: '1:547815924331:web:ab412ba63f1ff5a421472e',
	measurementId: 'G-7TR3Q1Y529',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
	db,
	auth
};
