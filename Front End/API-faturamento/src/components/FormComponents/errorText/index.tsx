import { StyledErrorText } from "./style";

interface ErrorTextProps {
  children: React.ReactNode;
  className?: string;
  marginleft?: string;
  marginbottom?: string;
  margintop?: string;
  color?: string;
}

export const ErrorTextComponent: React.FC<ErrorTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <StyledErrorText className={className} {...props}>
      {children}
    </StyledErrorText>
  );
};
