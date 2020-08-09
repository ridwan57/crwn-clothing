import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDf3VwsWxjRy1Nmw17d7HRrYwtimYBl6As",
    authDomain: "crwn-db-f2ed6.firebaseapp.com",
    databaseURL: "https://crwn-db-f2ed6.firebaseio.com",
    projectId: "crwn-db-f2ed6",
    storageBucket: "crwn-db-f2ed6.appspot.com",
    messagingSenderId: "1031819216866",
    appId: "1:1031819216866:web:e4cb0a09cf54d9dc21dbbb",
    measurementId: "G-XK6XT7P3ED"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;