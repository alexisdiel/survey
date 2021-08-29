import { Box, DialogTitle } from '@material-ui/core';
import { FC } from 'react';
import useSurvey from '../hooks/use-servey';
import { SurveySteps } from '../models/survey-steps';
import SurveyModalActions from './survey-modal-actions';

interface SurveyModalStepProps {
  children: JSX.Element;
  onNextClick?: () => void;
}

const SurveyModalStep: FC<SurveyModalStepProps> = ({ children, onNextClick }) => {
  const { state } = useSurvey();
  return (
    <>
      <Box minHeight={300} minWidth={450}>
        <DialogTitle>{SurveySteps[state.activeStep]}</DialogTitle>
        {children}
      </Box>
      <SurveyModalActions onNextClick={onNextClick} />
    </>
  );
};

export default SurveyModalStep;
