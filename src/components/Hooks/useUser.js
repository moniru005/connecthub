import React, { useContext } from "react";
import { userAuth } from "../context/AuthContext";

const useUser = () => {
  const {
    createUser,
    login,
    logout,
    user,
    updateUserProfile,
    loading,
    setLoading,
    
  } = useContext(userAuth);

  return {
    createUser,
    login,
    logout,
    user,
    updateUserProfile,
    loading,
    setLoading,
    
  };
};

export default useUser;
