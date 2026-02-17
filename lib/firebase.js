import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIza...", // Your actual keys here
  authDomain: "workshop-genai-477501.firebaseapp.com",
  projectId: "workshop-genai-477501",
  storageBucket: "workshop-genai-477501.firebasestorage.app",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};

// 1. Initialize Firebase (Prevents multiple initializations)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// 2. Export Firestore (The "db") - This fixes the 'Attempted import error'
export const db = getFirestore(app);

// 3. Safe Analytics (Only runs in the browser)
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};