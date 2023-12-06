import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { RightColumn, LeftColumn } from "./style";

interface TwoColumnLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <Container fluid>
      <Row>
        <LeftColumn
          width="100%"
          backgroundcolor="white"
          className="d-none d-lg-block "
          padding="0">
          {leftContent}
        </LeftColumn>
        <RightColumn backgroundcolor="white">{rightContent}</RightColumn>
      </Row>
    </Container>
  );
};
