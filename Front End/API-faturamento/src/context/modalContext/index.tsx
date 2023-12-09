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
  const [modalSize, setModalSize] = useState<"sm" | "lg" | "xl">("sm");

  const openModal = (
    modalName: string,
    content: React.ReactNode,
    size: "sm" | "lg" | "xl" = "sm"
  ) => {
    setIsModalOpen(true);
    setActiveModal(modalName);
    setModalContent(content);
    setModalSize(size);
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
        modalSize,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
