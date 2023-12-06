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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledInputsWrapper = styled.div<StyledInputsWrapperProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifycontent};
  margin-bottom: ${(props) => props.marginbottom};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const StyledInputGroup = styled(FormGroup)<StyledInputGroupProps>`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const PasswordIconToggle = styled.button<PasswordIconToggleProps>`
  position: ${(props) => (props.position ? props.position : "absolute")};
  right: ${(props) => (props.right ? props.right : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  background: ${(props) => props.background || "transparent"};
  cursor: ${(props) => props.cursor || "pointer"};
  bottom: ${(props) => props.bottom || "0"};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    ${(props) => {
      if (props.iconId === "passwordIcon") {
        return "right: 10%; bottom: 44.5%";
      } else if (props.iconId === "confirmPasswordIcon") {
        return "right: 10%; bottom: 33.8%";
      }
    }}
  }
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 53px;
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    top: 21px;
  }
`;

export const InsideButtonWrapper = styled(StyledButtonWrapper)`
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
