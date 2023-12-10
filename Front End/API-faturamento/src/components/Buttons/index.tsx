import React from "react";
import { ButtonProps, StyledButton } from "./style";

export interface ButtonPropsComponent extends ButtonProps {
  name?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  statusActive?: boolean;
}

export const ButtonComponent: React.FC<ButtonPropsComponent> = ({
  name,
  className,
  children,
  ...props
}) => {
  return (
    <StyledButton {...props} className={className}>
      {name} {children}
    </StyledButton>
  );
};
