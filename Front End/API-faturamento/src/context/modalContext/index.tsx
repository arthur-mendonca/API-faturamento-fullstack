import { createContext, useState } from "react";
import { IModalContext } from "./types";
import { IDefaultProviderProps } from "../userContext/types";

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IDefaultProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<null | string>(null);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const openModal = (modalName: string, content: React.ReactNode) => {
    console.log(`Abrindo modal ${modalName}`);
    setIsModalOpen(true);
    setActiveModal(modalName);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveModal(null);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        activeModal,
        openModal,
        closeModal,
        modalContent,
        setModalContent,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
