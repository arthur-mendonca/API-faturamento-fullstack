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

  modalSize: "sm" | "lg" | "xl";
}
