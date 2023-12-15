import React from "react";
import { StyledImage } from "./style";
import img from "../../images/png/backgroundImg.png";

interface ImageProps {
  width?: string;
  height?: string;
  maxwidth?: string;
  marginbottom?: string;
  marginleft?: string;
}

export const FrontPageImageComponent: React.FC<ImageProps> = ({ ...props }) => {
  return (
    <>
      <StyledImage {...props} src={img} alt="Steve Jobs image" />
    </>
  );
};
