import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCf1GB6C2iCRqZIfXK24WLBT36Nj_CHXk0",
    authDomain: "twitter-b0f68.firebaseapp.com",
    projectId: "twitter-b0f68",
    storageBucket: "twitter-b0f68.appspot.com",
    messagingSenderId: "491524126195",
    appId: "1:491524126195:web:87acad6d5e779643acce86"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }