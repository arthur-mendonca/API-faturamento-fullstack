export interface IModalContext {
  openModal: (modalName: any) => void;

  closeModal: () => void;

  isModalOpen: boolean;

  activeModal: null;
}
