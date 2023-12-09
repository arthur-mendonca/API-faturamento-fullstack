import { Card, Button } from "react-bootstrap";
import { IOccurrence } from "../../context/occurrencesContext/types";

interface DetalhesProps {
  occurrence: IOccurrence;
}

export const DetalhesNaoConformidadeCard: React.FC<DetalhesProps> = () => {
  return (
    <>
      {/* <Card>
        <Card.Header>
          <Card.Title>{name}</Card.Title>
          <Button variant="secondary">
            <i className="bi bi-three-dots-vertical"></i>
          </Button>
        </Card.Header>
        <Card.Body>
          <p>Origem: {origin}</p>
          <p>Data: {date}</p>
          <p>Status: {status}</p>
          {description && <p>Descrição: {description}</p>}
        </Card.Body>
      </Card> */}
    </>
  );
};
