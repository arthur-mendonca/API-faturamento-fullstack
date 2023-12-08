// ModalContext.js
import { createContext, useState } from "react";
import { IModalContext } from "./types";
import { IDefaultProviderProps } from "../userContext/types";

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IDefaultProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setIsModalOpen(true);
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
