import { Form } from "react-bootstrap";
import styled from "styled-components";

interface InputProps {
  bordercolor?: string;
  borderwidth?: string;
  borderradius?: string;
  padding?: string;
}

export const StyledInput = styled(Form.Control)<InputProps>`
  border-color: ${(props) => props.bordercolor || props.theme.colors.grayLight};
  border-width: ${(props) => props.bordercolor};
  border-radius: ${(props) => props.borderradius || "10px"};
  padding: ${(props) => props.padding || "25px 15px"};
`;
