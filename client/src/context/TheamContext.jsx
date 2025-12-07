import { createContext, useState } from "react";

export const TheamContext = createContext({});

const TheamContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <TheamContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </TheamContext.Provider>
  );
};

export default TheamContextProvider;
