export interface IModalContext {
  openModal: (
    modalName: string,
    content: React.ReactNode,
    size?: "sm" | "lg" | "xl"
  ) => void;

  closeModal: () => void;

  isModalOpen: boolean;

  activeModal: string | null;

  modalContent: React.ReactNode;

  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;

  setMobileModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;

  mobileModalContent: React.ReactNode;

  modalSize: "sm" | "lg" | "xl";

  activeMobileModal: string | null;

  setActiveMobileModal: React.Dispatch<React.SetStateAction<string | null>>;

  openMobileModal: (
    modalName: string,
    content: React.ReactNode,
    size?: "sm" | "lg" | "xl"
  ) => void;
}
