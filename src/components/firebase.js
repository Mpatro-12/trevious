// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj8sZZ5MHHEHX3uMZFEp9mgHeLmKXU6Ko",
  authDomain: "cryptocurrency-335e1.firebaseapp.com",
  projectId: "cryptocurrency-335e1",
  storageBucket: "cryptocurrency-335e1.appspot.com",
  messagingSenderId: "552232657032",
  appId: "1:552232657032:web:b6fedd4d71b5d544c7ff3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);