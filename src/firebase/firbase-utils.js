import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import createHistory from '../history';


const config = {
    apiKey: "AIzaSyD3kogPExwIOclLneUwdAB3y8Yw2bSi384",
    authDomain: "projectdb-5ef05.firebaseapp.com",
    databaseURL: "https://projectdb-5ef05.firebaseio.com",
    projectId: "projectdb-5ef05",
    storageBucket: "",
    messagingSenderId: "347025148408",
    appId: "1:347025148408:web:a9dfbbd4b3554a1227ae0d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })
        }catch(error) {
       console.log('error creating user', error.message)
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
    createHistory.push('/');
};

export default firebase;
