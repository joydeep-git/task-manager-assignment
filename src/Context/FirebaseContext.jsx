import { React, useState, useEffect, createContext, useContext } from "react";

// IMPORTING FIREBASE
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updatePassword } from "firebase/auth";

// import { getDoc, setDoc, onSnapshot, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZ8OMifFDacbFDiqXHt8V0csJf0OHHY5M",
    authDomain: "task-manager-assignment-ba25b.firebaseapp.com",
    projectId: "task-manager-assignment-ba25b",
    storageBucket: "task-manager-assignment-ba25b.appspot.com",
    messagingSenderId: "431793480102",
    appId: "1:431793480102:web:8146ad604a5b39c176af67",
    measurementId: "G-5RR3CYJ6SD"
};

// FIREBASE CONFIGURATION
const firebase = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebase);

// CUSTOM CONTEXT HOOK
const FirebaseContext = createContext(null);
export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseContextProvider = ({ children }) => {

    ///////////////////////  STATE MANAGEMENT /////////////////////////

    // USER DATA
    const [userData, setUserData] = useState(null);

    // USER EMAIL
    const [userEmail, setUserEmail] = useState(null);

    // USER AUTHENTICATION
    const [authenticated, setAuthenticated] = useState(false);

    // TASKS
    const [tasks, setTasks] = useState([]);

    // ERROR
    const [error, setError] = useState(null);
    ////////////////////////////////////////////////////////////////////////////

    // ERROR HANDLING AND DISPLAY
    useEffect(() => {
        error !== null ? alert(error) : null;
        setTimeout(() => {
            setError(null)
        }, 1000);
    }, [error]);

    //// USER ACCOUNT REGISTRATION
    const createUserAccount = async (em, pass) => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, em, pass);
            setAuthenticated(true);
        } catch (error) {
            setError(error.message);
        }
    }

    //// USER ACCOUNT LOGIN
    const loginUserAccount = async (em, pass) => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, em, pass);
            setAuthenticated(true);
        } catch (error) {
            setError(error.message);
        }
    }

    //// CHECKING AUTHENTICATION
    useEffect(() => {
        const checking = onAuthStateChanged(firebaseAuth, (usr) => {
            if (usr) {
                setAuthenticated(true);
                setUserData(usr);
            } else {
                setAuthenticated(false);
                setUserData(null);
            }
        })
        return () => checking();
    }, []);

    //// USER EMAIL EXTRACTION
    useEffect(() => {
        if (userData !== null) {
            setUserEmail(userData.email);
        }
    }, [userData]);

    //// USER UPDATE PASSWORD
    const updateAccountPassword = async (currentPassword, newPassword) => {
        try {
            const user = firebaseAuth.currentUser;
            const credentials = await signInWithEmailAndPassword(firebaseAuth, user.email, currentPassword);
            await updatePassword(credentials.user, newPassword);
            setError("Password updated successfully");
        } catch (error) {
            setError(error.message);
        }
    }

    //// USER SIGN OUT
    const signOutUser = () => {
        signOut(firebaseAuth);
        setAuthenticated(false);
        setUserData(null);
        setUserData(null);
    }

    return (
        <FirebaseContext.Provider value={{
            authenticated, setAuthenticated,
            userData, setUserData,
            tasks, setTasks,
            error, setError,
            createUserAccount, loginUserAccount, signOutUser,
            userEmail, setUserEmail,
            updateAccountPassword
        }}>
            {children}
        </FirebaseContext.Provider>
    );
};