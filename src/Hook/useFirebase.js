import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, updateProfile, FacebookAuthProvider ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import intializeFirebase from "../Firebase/Firebase.init";

intializeFirebase()

const useFirebase = () => {
  const auth = getAuth();

  const googleprovider = new GoogleAuthProvider();
  const facebookprovider = new FacebookAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()

    const signInWithGoogle = () => {
      setIsLoading(true)
        signInWithPopup(auth, googleprovider)
          .then((result) => {
            const user = result.user;
            setUser(user)
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
            console.log(user);
            setUser(user)
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

  const handleUserLogin = (email, password, navigate, location) =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user = result.user
    setUser(user)
  })
  .catch((authError) => {
    console.log(authError.massage);

  });
  }
      useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }else{
                setAuthError('');
            }
            setIsLoading(false)
        });
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