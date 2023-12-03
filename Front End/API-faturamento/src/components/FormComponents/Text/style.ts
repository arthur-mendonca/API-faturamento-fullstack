import { Form } from "react-bootstrap";
import styled from "styled-components";

interface StyledFormTextProps {
  fontweigth?: string;
  fontsize?: string;
}

export const StyledFormText = styled(Form.Text)<StyledFormTextProps>`
  font-weight: ${(props) => props.fontweigth};
  font-size: ${(props) => props.fontsize};
`;
