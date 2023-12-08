export interface IModalContext {
  openModal: (modalName: string, content: React.ReactNode) => void;

  closeModal: () => void;

  isModalOpen: boolean;

  activeModal: string | null;

  modalContent: React.ReactNode;

  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}
