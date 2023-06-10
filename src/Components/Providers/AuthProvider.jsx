import React, { createContext, useEffect, useState } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../../firebase.config'
export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    },[])
    console.log(user);


    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth,provider)
    }

    const updateUserProfile = (name,img) => {
       return updateProfile(auth.currentUser,{
            displayName: `${name}` , photoURL: `${img}`
        })
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        googleSignIn,
        updateUserProfile,
    }



  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider