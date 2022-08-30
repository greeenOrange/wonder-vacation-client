import {getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, TwitterAuthProvider, updateProfile, FacebookAuthProvider ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import intializeAuthentication from "../Firebase/Firebase.init";

intializeAuthentication()

const useFirebase = () => {
  const auth = getAuth();

  const googleprovider = new GoogleAuthProvider();
  const facebookprovider = new FacebookAuthProvider();
  const twitterprovider = new TwitterAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

    const signInWithGoogle = () => {
      setIsLoading(true)
        signInWithPopup(auth, googleprovider)
          .then((result) => {
            const user = result.user;
            setUser(user)
            setAuthError('');
            navigate(from, {replace: true})
        }).catch((error) => {
            setAuthError(error.message)
          }).finally(() =>{
            setIsLoading(false)
          })
      };
      
      const signInWithFacebook = () =>{
        setIsLoading(true)
        signInWithPopup(auth, facebookprovider)
          .then((result) => {
            const user = result.user;
            setUser(user)
            setAuthError('');
            navigate(from, {replace: true})
        }).catch((error) => setAuthError(error.message));
      }

      const signInWithTwitter = () =>{
        setIsLoading(true)
        signInWithPopup(auth, twitterprovider)
          .then((result) => {
            const user = result.user;
            setUser(user)
            setAuthError('');
            navigate(from, {replace: true})
        })
          .catch((error) => setAuthError(error.message));
      }

      const handleUserRegister = (email, password, firstname, lastname, navigate) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              updateProfile(auth.currentUser, {
                displayName: firstname, lastname
              })
              .then(() => {
              })
              setUser(userCredential.user)
              navigate(from, {replace: true})
            }).catch((error) => {
                setAuthError(error.message);
                console.log(error);
            }).finally(() => setIsLoading(false));
    }

        const handleUserLogin = (email, password, navigate, location) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          const from = location.state?.from?.pathname || '/';
          setUser(user);
          navigate(from)
        }).catch((error) => {
          setAuthError(error.message)
        }).finally(() => setIsLoading(false));

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
        signInWithTwitter,
        logout
        };
};

export default useFirebase;