import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const openNav = () => {
    setIsOpenNav(true);
  };
  const closeNav = () => {
    setIsOpenNav(false);
  };
  const openSubmenu = () => {
    setIsOpenSubmenu(true);
  };
  const closeSubmenu = () => {
    setIsOpenSubmenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        isOpenNav,
        isOpenSubmenu,
        openNav,
        closeNav,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
