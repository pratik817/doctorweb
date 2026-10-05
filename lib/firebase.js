// lib/firebase.js
// ─────────────────────────────────────────────────────────────
// Firebase + Firestore initialisation for the D4H website.
//
// HOW TO FILL IN YOUR CREDENTIALS
// ────────────────────────────────
// 1. Go to https://console.firebase.google.com
// 2. Select your project (the one with the "d4h-rn-sb" Firestore database)
// 3. Click ⚙️ Project Settings → scroll to "Your apps"
// 4. Click </> to register a Web app (if not done yet), then copy the
//    firebaseConfig values below.
//
// ENVIRONMENT VARIABLES (recommended for security)
// ─────────────────────────────────────────────────
// Create a file called .env.local in the project root (next to package.json)
// and add the following lines, replacing the placeholder values:
//
//   NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
//   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
//   NEXT_PUBLIC_FIREBASE_PROJECT_ID=d4h-rn-sb
//   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
//   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
//   NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc123
//
// ─────────────────────────────────────────────────────────────

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Prevent duplicate app initialisation in Next.js dev mode (hot-reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
