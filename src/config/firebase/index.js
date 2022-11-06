import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDT6QG7WE66ASL8CiQGQ5kNU2nj35uUTv8',
  authDomain: 'ponpes-ibrohimiyyah.firebaseapp.com',
  projectId: 'ponpes-ibrohimiyyah',
  storageBucket: 'ponpes-ibrohimiyyah.appspot.com',
  messagingSenderId: '1089564524199'
};

const app = initializeApp(
  {
    ...config,
    appId: '1:1089564524199:web:372e54464fa163b465e582',
    measurementId: 'G-CELDZMRHY6'
  },
  'Main'
);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const otherApp = initializeApp(
  {
    ...config,
    appId: '1:1089564524199:web:91ba73ca11beb00065e582',
    measurementId: 'G-W0E186W7MG'
  },
  'Secondary'
);
const otherAuth = getAuth(otherApp);

export { app, analytics, auth, db, storage, otherApp, otherAuth };
