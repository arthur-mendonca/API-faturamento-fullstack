import { StyledInput } from "./style";

interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  bordercolor?: string;
  borderwidth?: string;
  borderradius?: string;
  padding?: string;
  children?: React.ReactNode;
}

export const InputFormComponent: React.FC<InputProps> = ({
  children,
  ...props
}) => {
  return <StyledInput {...props}>{children}</StyledInput>;
};
