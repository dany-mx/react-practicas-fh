import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try{
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message 
    }
  }
}