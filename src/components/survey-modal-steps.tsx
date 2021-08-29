import { FC } from 'react';
import { Box, DialogTitle, Typography } from '@material-ui/core';
import useSurvey from '../hooks/use-servey';
import { SurveySteps } from '../models/survey-steps';
import SurveyModalStepDetail from './survey-modal-step-detail';
import SurveyModalStepFavorite from './survey-modal-step-favorite';
import SurveyModalStepIdentity from './survey-modal-step-identity';
import SurveyModalStepSummary from './survey-modal-step-summary';

const SurveyModalSteps: FC = () => {
  const { state } = useSurvey();
  return (
    <Box minHeight={300} minWidth={450} p={'10px'}>
      <Typography align={'center'} variant={'h5'}>
        YieldStreet Survey
      </Typography>
      {state.activeStep === SurveySteps.Identity && <SurveyModalStepIdentity />}
      {state.activeStep === SurveySteps.Detail && <SurveyModalStepDetail />}
      {state.activeStep === SurveySteps.Favorite && <SurveyModalStepFavorite />}
      {state.activeStep === SurveySteps.Summary && <SurveyModalStepSummary />}
    </Box>
  );
};

export default SurveyModalSteps;
