import React, { FC, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import SurveyModalSteps from './survey-modal-steps';
import useSurvey from '../hooks/use-servey';
import { Snackbar } from '@material-ui/core';
import { SurveyActions } from '../models/survey-actions';
import { Alert, AlertTitle } from '@material-ui/lab';

const SurveyModal: FC = () => {
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useSurvey();

  useEffect(() => {
    if (!state.submitted) setTimeout(() => setOpen(true), 2000);
  }, [state]);

  const closeFeedback = () => dispatch({ type: SurveyActions.CloseFeedback });
  return (
    <>
      <Dialog open={open && !state.submitted} maxWidth={'sm'}>
        <SurveyModalSteps />
      </Dialog>
      <Snackbar open={state.showFeedback} autoHideDuration={3000} onClose={closeFeedback}>
        <Alert elevation={6} variant="filled" onClose={closeFeedback} severity="success">
          <AlertTitle>Success</AlertTitle>
          Your survey was submitted successfully! Thank you!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SurveyModal;
