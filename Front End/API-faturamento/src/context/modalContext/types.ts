export interface IModalContext {
  openModal: (modalName: string) => void;

  closeModal: () => void;

  isModalOpen: boolean;

  activeModal: string | null;
}
