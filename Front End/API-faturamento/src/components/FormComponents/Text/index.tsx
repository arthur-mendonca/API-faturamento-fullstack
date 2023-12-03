import { StyledFormText } from "./style";

interface FormTextProps {
  children: React.ReactNode;
  className?: string;
}

export const FormTextComponent: React.FC<FormTextProps> = ({
  children,
  className,
}) => {
  return <StyledFormText className={className}>{children}</StyledFormText>;
};
