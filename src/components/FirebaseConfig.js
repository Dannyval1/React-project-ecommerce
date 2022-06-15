import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjo2H67rOIAoh5GK2jvqOKHKntcAHhoKw",
  authDomain: "tienda-virtual-78094.firebaseapp.com",
  projectId: "tienda-virtual-78094",
  storageBucket: "tienda-virtual-78094.appspot.com",
  messagingSenderId: "11983216871",
  appId: "1:11983216871:web:485078f1bbe2ed3dc34242"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
