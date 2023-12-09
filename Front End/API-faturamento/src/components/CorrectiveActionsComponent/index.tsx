import { useContext, useEffect } from "react";
import {
  StyledCard,
  StyledCardBody,
  StyledCheckbox,
  StyledFormGroup,
  StyledText,
} from "./style";
import { CorrectiveActionContext } from "../../context/correctiveActionsContext";
import { useParams } from "react-router-dom";

export const CorrectiveActionsComponent: React.FC = () => {
  const {
    correctiveActionResponse,
    getAllCorrectiveActionsFromOccurrence,
    updateCorrectiveAction,
  } = useContext(CorrectiveActionContext);

  const { id } = useParams();

  useEffect(() => {
    getAllCorrectiveActionsFromOccurrence(+id!);
  }, [getAllCorrectiveActionsFromOccurrence, id]);

  const handleCheckboxChange = async (
    actionId: number,
    currentState: boolean
  ) => {
    await updateCorrectiveAction(actionId, { active: !currentState });
    getAllCorrectiveActionsFromOccurrence(+id!);
  };

  return (
    <StyledCard height="346px">
      <StyledCard.Header style={{ backgroundColor: "white" }}>
        <StyledCard.Title className="details_title_h1">
          Ações corretivas
        </StyledCard.Title>
      </StyledCard.Header>
      <StyledCardBody overflowY="auto">
        {correctiveActionResponse?.corrective_action.length === 0 ? (
          <StyledText>Nenhuma ação cadastrada</StyledText>
        ) : (
          correctiveActionResponse?.corrective_action.map((action) => (
            <StyledFormGroup
              key={action.id}
              id={action.id.toString()}
              className="d-flex p-3">
              <StyledCheckbox
                className="corrective_actions_text"
                type="checkbox"
                checked={action.active}
                onChange={() => handleCheckboxChange(action.id, action.active)}
              />
              <StyledText margin_left="15px">{action.name}</StyledText>
            </StyledFormGroup>
          ))
        )}
      </StyledCardBody>
    </StyledCard>
  );
};
