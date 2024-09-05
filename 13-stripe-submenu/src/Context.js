import React, { useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({page:'', links:[]})

  const openNav = () => {
    setIsOpenNav(true);
  };
  const closeNav = () => {
    setIsOpenNav(false);
  };
  const openSubmenu = (text, coordinate) => {
    const page = sublinks.find((link)=> link.page === text)
    console.log(page)
    setPage(page)
    setLocation(coordinate)
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
        location,
        page
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
