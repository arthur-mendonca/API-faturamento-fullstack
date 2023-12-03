import { UseFormRegisterReturn } from "react-hook-form";
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
  register?: UseFormRegisterReturn<any>;
}

export const InputFormComponent: React.FC<InputProps> = ({
  children,
  register,
  ...props
}) => {
  return (
    <StyledInput {...register} {...props}>
      {children}
    </StyledInput>
  );
};
