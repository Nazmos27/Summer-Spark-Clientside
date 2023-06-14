import React, { createContext, useEffect, useState } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../../firebase.config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)

            if(currentUser){
                axios.post('https://assignment-12-server-rouge.vercel.app/jwt',{email : currentUser.email})
                .then(data => {
                    localStorage.setItem('access-token' ,data.data.token)
                })
                setLoading(false)
            }else{
                localStorage.removeItem('access-token')
                
                
            }
            
            
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