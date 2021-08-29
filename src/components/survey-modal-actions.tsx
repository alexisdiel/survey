import { Button, DialogActions } from '@material-ui/core';
import { FC } from 'react';
import useSurvey from '../hooks/use-servey';
import { SurveyActions } from '../models/survey-actions';
import { SurveySteps } from '../models/survey-steps';

interface SurveyModalActionsProps {
  onNextClick?: () => void;
}

const SurveyModalActions: FC<SurveyModalActionsProps> = ({ onNextClick }) => {
  const { state, dispatch } = useSurvey();

  const showNextButton = state.activeStep !== SurveySteps.Summary;
  const showPrevButton = state.activeStep !== SurveySteps.Identity;
  const showSubmitButton = state.activeStep === SurveySteps.Summary;

  return (
    <DialogActions>
      {showPrevButton && (
        <Button variant="contained" onClick={() => dispatch({ type: SurveyActions.Previous })}>
          Previous
        </Button>
      )}
      {showNextButton && (
        <Button variant="contained" color="primary" onClick={() => onNextClick && onNextClick()}>
          Next
        </Button>
      )}
      {showSubmitButton && (
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: SurveyActions.Submit })}>
          Submit
        </Button>
      )}
    </DialogActions>
  );
};

export default SurveyModalActions;
