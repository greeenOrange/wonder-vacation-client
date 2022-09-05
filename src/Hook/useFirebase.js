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
  const [admin, setAdmin] = useState(false);
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
            // save user to the database
            saveUser(user.email, 'POST');
            // saveUser(user.email, user.displayName, 'PUT');
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
             // save user to the database
            saveUser(user.email, 'POST');
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
             // save user to the database
             saveUser(user.email, 'POST');
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
              setAuthError('');
              const newUser = { email, displayName: firstname, lastname  };
              // save user to the database
              saveUser(email, 'POST');
              updateProfile(auth.currentUser, {
                displayName: firstname
              })
              .then(() => {
              })
              setUser(newUser);
              navigate(from, {replace: true})
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

        const handleUserLogin = (email, password, navigate) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          navigate(from, {replace: true})
        }).catch((error) => {
          setAuthError(error.message)
        }).finally(() => setIsLoading(false));

        }
  // Observe user Auth state Change or Not
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
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

  // Send user info in DB
  const saveUser = (email, method) => {
    const user = { email, };
    setIsLoading(true);
    fetch('http://localhost:5000/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }).catch((error) => {
      setAuthError(error.message)
    }).finally(() => setIsLoading(false));
}

// Check Admin
useEffect(() => {
  fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
}, [user?.email])

      return {
        signInWithGoogle,
        user,
        isLoading,
        handleUserRegister,
        admin,
        handleUserLogin,
        signInWithFacebook,
        signInWithTwitter,
        logout
        };
};

export default useFirebase;