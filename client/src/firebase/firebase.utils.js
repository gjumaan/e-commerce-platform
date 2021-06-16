import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB400EMgSOZuN1sOQckTGkteAYw9E49mhg",
    authDomain: "crwn-db-955ae.firebaseapp.com",
    projectId: "crwn-db-955ae",
    storageBucket: "crwn-db-955ae.appspot.com",
    messagingSenderId: "549489519744",
    appId: "1:549489519744:web:c2e55b843b0fbb479d0a65",
    measurementId: "G-YKGBQKDRJ3"
};

firebase.initializeApp(config); 

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        return;
    } 

    const userRef = firestore.doc(`'users/${userAuth.uid}'`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message)
        }
    }
    
    return userRef;
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);

        }, reject)
    }) 
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export default firebase;