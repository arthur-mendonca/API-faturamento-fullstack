//utilizado no modal de criação para evitar conflito global
import { ButtonPropsComponent } from "..";
import { StyledModalButton } from "./style";

export const ModalButtonComponent: React.FC<ButtonPropsComponent> = ({
  statusActive,
  name,
  className,
  children,
  ...props
}) => {
  return (
    <StyledModalButton
      className={className}
      statusActive={statusActive}
      {...props}>
      {name} {children}
    </StyledModalButton>
  );
};
