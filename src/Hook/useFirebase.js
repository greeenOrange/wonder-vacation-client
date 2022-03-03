import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import intializeFirebase from "../Firebase/Firebase.init";

intializeFirebase()

const useFirebase = () => {
  const auth = getAuth();
  const location = useLocation()
  const navigate = useNavigate() 
  const googleprovider = new GoogleAuthProvider();
  
  const [user, setUser] = useState({})
  const [error, setError] = useState("");

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleprovider)
          .then((result) => {
            console.log(result.user);
          })
      };

      const handleUserRegister = (email, password, location, navigate) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
    // Signed in 
    const user = result.user;
    // ...
  })
  .catch((error) => {
    console.log(error.massage);
    // ..
  });
      }
  const handleUserLogin = (email, password, navigate, location) =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const user = result.result
    // let result = location.state?.from?.pathname || "/";
    navigate(result)
    console.log(user);
    // ...
  })
  .catch((error) => {
    console.log(error.massage);

  });
  }
      useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        });
        return () => unsubscribed
    },[]);
    const logout = () => {
      signOut(auth).then(() => {
          // Sign-out successful.
      }).catch((error) => {
          // An error happened.
      })
       
  }

      return {
        signInWithGoogle,
        user,
        handleUserRegister,
        handleUserLogin,
        logout
        };
};

export default useFirebase;