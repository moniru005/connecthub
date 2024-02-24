"use client"
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Auth } from '../FirebaseConfig/config.firebase';
import { deleteCookie, setCookie } from "cookies-next";

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
                  if (currentUser) {
                        // Set a cookie called "session" with the user's email address
                        setCookie('session', JSON.stringify(currentUser?.email));
                        setLoading(false);
                        setUser(currentUser)
                      } else {
                        // Delete the "session" cookie if there is no user
                        destroyCookie( 'session');
                        // return null;
                      }
                  
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