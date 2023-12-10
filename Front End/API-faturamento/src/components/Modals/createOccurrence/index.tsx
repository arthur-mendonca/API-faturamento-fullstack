import { useContext } from "react";
import {
  StyledCloseButton,
  StyledModalHeader,
  CustomHeader,
  StyledSpan,
} from "./style";
import { ModalContext } from "../../../context/modalContext";
import { ButtonComponent } from "../../Buttons";
import { useTheme } from "styled-components";

export const CreateOccurrenceModal: React.FC = ({ ...props }) => {
  const { closeModal } = useContext(ModalContext);

  const theme = useTheme();
  return (
    <>
      <StyledModalHeader className="d-flex " {...props}>
        <StyledSpan
          className="position-relative"
          display="flex"
          justify_content="space-between"
          align_items="center"
          gap="1.5rem"
          position="relative"
          right="15%">
          <StyledCloseButton onClick={() => closeModal()} font_size={"1rem"} />
          <p className="modal_text">Nova ocorrência</p>
        </StyledSpan>
        <StyledSpan position="relative" left="60px" right="-15%">
          <ButtonComponent
            background={theme.colors.blue}
            className="text_menu_button"
            padding="0 3rem">
            Criar
          </ButtonComponent>
        </StyledSpan>
      </StyledModalHeader>
    </>
  );
};
