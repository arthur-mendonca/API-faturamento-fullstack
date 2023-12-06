import styled from "styled-components";
import { Form, FormGroup } from "react-bootstrap";
import {
  FormProps,
  PasswordIconToggleProps,
  StyledInputGroupProps,
  StyledInputsWrapperProps,
  StyledCheckBoxInputProps,
  StyledButtonWrapperProps,
} from "./types";

export const StyledRegisterForm = styled(Form)<FormProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export const StyledInputsWrapper = styled.div<StyledInputsWrapperProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifycontent};
  margin-bottom: ${(props) => props.marginbottom};
`;

export const StyledInputGroup = styled(FormGroup)<StyledInputGroupProps>`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};
`;

export const PasswordIconToggle = styled.button<PasswordIconToggleProps>`
  position: ${(props) => (props.position ? props.position : "absolute")};
  right: ${(props) => (props.right ? props.right : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  background: ${(props) => props.background || "transparent"};
  cursor: ${(props) => props.cursor || "pointer"};
  bottom: ${(props) => props.bottom || "0"};
`;

export const StyledCheckBoxInput = styled(Form.Check)<StyledCheckBoxInputProps>`
  font-weight: ${(props) => props.fontweight};
  position: ${(props) => props.position};
  left: ${(props) => props.left};

  max-width: ${(props) => props.textmaxwidth};

  .form-check-input {
    font-size: ${(props) => props.inputfontsize};
    border-width: ${(props) => props.inputborderwidth};
    border-color: ${(props) => props.inputbordercolor};
    border-radius: ${(props) => props.inputborderradius};
    box-shadow: ${(props) => props.inputboxshadow};
    max-width: ${(props) => props.inputmaxwidth};
  }

  .form-check-label {
    font-weight: ${(props) => props.labelfontweight};
  }
`;

export const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifycontent};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  flex-direction: ${(props) => props.flexdirection};
  align-items: ${(props) => props.alignitems};
  width: ${(props) => props.width};
`;

export const InsideButtonWrapper = styled(StyledButtonWrapper)``;