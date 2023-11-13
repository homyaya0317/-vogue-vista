import {initializeApp} from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword

} from "firebase/auth"




import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZDMKZMOb57GQzfwfCg14Rsu0fA7ASyD0",
    authDomain: "vogue-vasta-db.firebaseapp.com",
    projectId: "vogue-vasta-db",
    storageBucket: "vogue-vasta-db.appspot.com",
    messagingSenderId: "513071340752",
    appId: "1:513071340752:web:5654cc26ab9aa2a1add2d5"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt:"select_account"

  })

  export const auth = getAuth()

  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

  export const signInWithGoogleRedirect = () =>  signInWithRedirect(auth,provider)


export const db = getFirestore()

export const createUserDocumentFromAuth  = async(userAuth)=>{

   if(!userAuth) return
   const userDocRef = doc(db,"users",userAuth.uid)
   

   const userSnapShot =  await getDoc(userDocRef)
   
   //if user data does not exist
   if(!userSnapShot.exists()){

    const {displayName,email} = userAuth
    const createdAt = new Date()

    try{

      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      })


    }catch(error){

      console.log("error creating the user",error.message);
    }
   }


   return userDocRef;


   //if user data exists
   //return userDocRef  
}

export const updateDisplayName = async (user, displayName) => {
  try {
    await updateProfile(user, { displayName });
   
  } catch (error) {
    console.error('Error updating display name:', error);
  }
};


export const createAuthUserWithEmailAndPassword = async(email,password) => {

  if(!email || !password) return;

 return await createUserWithEmailAndPassword(auth,email,password)
  
}


export const signInAuthWithEmailAndPassword = async(email,password) => {

  if(!email || !password) return;

 return await signInWithEmailAndPassword(auth,email,password)
  
}


