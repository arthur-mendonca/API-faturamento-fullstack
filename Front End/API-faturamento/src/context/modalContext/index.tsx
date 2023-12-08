import { createContext, useState } from "react";
import { IModalContext } from "./types";
import { IDefaultProviderProps } from "../userContext/types";

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IDefaultProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<null | string>(null);

  const openModal = (modalName: string) => {
    console.log(`Abrindo modal ${modalName}`);
    setIsModalOpen(!isModalOpen);
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
