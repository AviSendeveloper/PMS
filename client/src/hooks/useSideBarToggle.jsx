import React, { useContext } from "react";
import { TheamContext } from "../context/TheamContext.jsx";

const useSideBarToggle = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(TheamContext);

  return { isSideBarOpen, setIsSideBarOpen };
};

export default useSideBarToggle;
