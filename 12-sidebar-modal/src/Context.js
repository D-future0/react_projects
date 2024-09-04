import React, { createContext, useContext, useState } from "react";

const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const isOpenSidebar = () => {
    setOpenSidebar(true);
  };
  const isCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const isOpenModal = () => {
    setOpenModal(true);
  };
  const isCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Appcontext.Provider
      value={{
        openSidebar,
        openModal,
        isOpenSidebar,
        isCloseSidebar,
        isOpenModal,
        isCloseModal
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
export const useGloberProvider = () => {
  return useContext(Appcontext);
};

export default  AppProvider;
