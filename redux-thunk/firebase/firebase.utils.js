import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCkDJgTw-TWVsYaFfwZvLWC7-CpVAuGoow',
  authDomain: 'ecommerce-fec63.firebaseapp.com',
  databaseURL: 'https://ecommerce-fec63.firebaseio.com',
  projectId: 'ecommerce-fec63',
  storageBucket: 'ecommerce-fec63.appspot.com',
  messagingSenderId: '141163314834',
  appId: '1:141163314834:web:c626f42f94b4957422304b',
  measurementId: 'G-8RBY162V8P',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  console.log(objectsToAdd)
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    console.log(newDocRef)
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  console.log(transformedCollection)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
