// Firebase CDN based setup for normal HTML/CSS/JS website



const firebaseConfig = {
  apiKey: "AIzaSyDt2aLZOO8DKXPgBF66cxBSs8nSBUfGk2M",
  authDomain: "ai-tool-hub-9e817.firebaseapp.com",
  projectId: "ai-tool-hub-9e817",
  storageBucket: "ai-tool-hub-9e817.firebasestorage.app",
  messagingSenderId: "62128063268",
  appId: "1:62128063268:web:f5099af76aac9165e529b1",
  measurementId: "G-F5J14X4G4V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = null;

// Initialize Analytics safely
if (firebase.analytics) {
  firebase.analytics();
}

// Initialize Firestore safely
if (firebase.firestore) {
  db = firebase.firestore();
  console.log("Firestore connected successfully");
}

console.log("Firebase connected successfully");