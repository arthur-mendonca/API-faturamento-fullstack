import { StyledFormText } from "./style";

interface FormTextProps {
  children: React.ReactNode;
  className?: string;
  marginleft?: string;
  marginbottom?: string;
  margintop?: string;
  color?: string;
}

export const FormTextComponent: React.FC<FormTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <StyledFormText className={className} {...props}>
      {children}
    </StyledFormText>
  );
};
