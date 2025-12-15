import React, { useContext } from "react";
import { TheamContext } from "../context/TheamContext.jsx";

const useAuth = () => {
  const { auth, setAuth } = useContext(TheamContext);

  return { auth, setAuth };
};

export default useAuth;
