import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { StyleProps } from "../../utils/types";
import Form from "react-bootstrap/Form";

export const StyledCard = styled(Card)<StyleProps>`
  max-height: ${(props) => props.max_heigth};
  height: ${(props) => props.height};
`;

export const StyledCardBody = styled(Card.Body)<StyleProps>`
  overflow-y: ${(props) => props.overflowY};
`;

export const StyledFormGroup = styled(Form.Group)<StyleProps>``;

export const StyledText = styled(Card.Text)<StyleProps>`
  margin-left: ${(props) => props.margin_left};
`;

export const StyledCheckbox = styled(Form.Check)<StyleProps>`
  .form-check-input {
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }

  .form-check-label {
  }
`;
