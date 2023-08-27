import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC36mfb8rEeDhUpp8D7JOQEPkF6G8yXvTo",
  authDomain: "chef-b2768.firebaseapp.com",
  projectId: "chef-b2768",
  storageBucket: "chef-b2768.appspot.com",
  messagingSenderId: "119744257740",
  appId: "1:119744257740:web:ebcb47f53cf0a2f8446c69",
  measurementId: "G-K9GWWQH5KR"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export default app