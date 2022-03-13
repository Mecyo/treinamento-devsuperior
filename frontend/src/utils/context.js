import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeLoading, setActiveLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activeLoading,
        setActiveLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};