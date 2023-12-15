import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";
import { ElementType, forwardRef } from "react";

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
  width?: string;
  height?: string;
  as?: ElementType<any>;
  id?: string;
  accept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export const InputUploadFormComponent = forwardRef<
  HTMLInputElement,
  InputProps
>(({ id, ...props }, ref) => {
  return <StyledInput ref={ref} id={id} {...props} />;
});
