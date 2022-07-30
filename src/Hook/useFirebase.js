import {getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, updateProfile, FacebookAuthProvider ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import intializeAuthentication from "../Firebase/Firebase.init";

intializeAuthentication()

const useFirebase = () => {
  const auth = getAuth();

  const googleprovider = new GoogleAuthProvider();
  const facebookprovider = new FacebookAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate()

    const signInWithGoogle = () => {
      setIsLoading(true)
        signInWithPopup(auth, googleprovider)
          .then((result) => {
            const user = result.user;
            setUser(user)
            console.log(user);
            setAuthError('');
            navigate("/")
        })
          .catch((error) => setAuthError(error.message));
      };
      
      const signInWithFacebook = () =>{
        setIsLoading(true)
        signInWithPopup(auth, facebookprovider)
          .then((result) => {
            const user = result.user;
            setUser(user)
            console.log(user);
            setAuthError('');
            navigate("/")
        })
          .catch((error) => setAuthError(error.message));
      }

      const handleUserRegister = (email, password, username, location, navigate) =>{
        console.log(email,password,username);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
    // Signed in 
    const user = result.user;
    updateProfile({displayName: username})
    // ...
  })
  .catch((authError) => {
    setAuthError(authError.massage);
    // ..
  });
      }

  const handleUserLogin = (email, password, displayName, navigate) =>{
  signInWithEmailAndPassword(auth, email, password, displayName)
  .then((result) => {
    const user = result.user
    setUser(user)
    console.log(user);
  })
  .catch((authError) => {
    console.log(authError.massage);

  });
  }
  // Observe user Auth state Change or Not
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
              getIdToken(user)
              .then(idToken => localStorage.setItem('idToken', idToken))
                setUser(user)
            }else{
                setAuthError('');
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    },[]);
    const logout = () => {
      signOut(auth).then(() => {
        setUser({})
          // Sign-out successful.
      }).catch((authError) => {
          // An error happened.
          setAuthError("");
      })
       
  }

      return {
        signInWithGoogle,
        user,
        isLoading,
        handleUserRegister,
        handleUserLogin,
        signInWithFacebook,
        logout
        };
};

export default useFirebase;