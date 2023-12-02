// src/components/Button/index.tsx
import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  background?: string;
  color?: string;
  hoverBackground?: string;
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({ name, ...props }) => {
  return <StyledButton {...props}>{name}</StyledButton>;
};

export default Button;
