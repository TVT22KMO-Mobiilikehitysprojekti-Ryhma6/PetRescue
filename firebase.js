// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjp173aSMHxnjV732fO3iVnHJDVecRzBc",
  authDomain: "petresque-d2054.firebaseapp.com",
  projectId: "petresque-d2054",
  storageBucket: "petresque-d2054.appspot.com",
  messagingSenderId: "559918556800",
  appId: "1:559918556800:web:4df9b990c75d41ae69e865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const haeKoiratFirestoresta = async () => {
  const koiratCollection = collection(db, 'koirat');

  try {
    const koiratSnapshot = await getDocs(koiratCollection);
    const koiratData = koiratSnapshot.docs.map(doc => ({
      id: doc.id,
      nimi: doc.get('dogName'),
      ika: doc.get('dogAge'),
      // Lisää muut kentät tarvittaessa
    }));
    return koiratData;
  } catch (error) {
    console.error('Virhe koirien hakemisessa Firestoresta:', error);
    throw error;
  }
};