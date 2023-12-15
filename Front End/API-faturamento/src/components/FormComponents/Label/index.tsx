import { StyledLabel } from "./style";

interface LabelProps {
  children: React.ReactNode;
}

export const LabelFormComponent: React.FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};
