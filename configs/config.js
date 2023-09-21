// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASkgmNd10H8aPx5wsGwtS76UKf5qVI_5s",
  authDomain: "photosharing-9be7b.firebaseapp.com",
  projectId: "photosharing-9be7b",
  storageBucket: "photosharing-9be7b.appspot.com",
  messagingSenderId: "229569616262",
  appId: "1:229569616262:web:a7038e8ec7eac3ea693407",
  measurementId: "G-MC0FQZ4LS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
