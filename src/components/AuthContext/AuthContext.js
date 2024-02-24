"use client"
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Auth } from '../FirebaseConfig/config.firebase';
// import { cookies } from 'next/headers';

export const userAuth = createContext(null)

const AuthProvider = ({ children }) => {
      const [loading, setLoading] = useState(true)
      const [user, setUser] = useState(null)

      // console.log(loading, user)

      // Create User
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(Auth, email, password)
      }

      // Login
      const login = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(Auth, email, password)
      }

      //Stay login
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
                  // console.log()
                  if(currentUser){
                        localStorage.setItem('session', `${currentUser?.email}`)
                        setLoading(false)
                        setUser(currentUser)
                  }else{
                        localStorage.removeItem('session')
                  }
                  setUser(currentUser)
            })

            return unsubscribe
      }, [])


      //      LogOut
      const logout = ()=>{

            setLoading(true)
            return signOut(Auth)
      }
      const updateUserProfile = (name, photoUrl)=>{
            return updateProfile(Auth.currentUser ,{
                  displayName: name, photoURL: photoUrl
            })
            .then(console.log(''))
      }





      const userInfo = {
            createUser, login, logout, user, updateUserProfile, loading, setLoading
      }


      return (
            <userAuth.Provider value={userInfo}>
                  {children}
            </userAuth.Provider>
      );
};

export default AuthProvider;