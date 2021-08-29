import { createStyles, DialogContent, FormLabel, makeStyles, TextField } from '@material-ui/core';
import { FC } from 'react';
import useSurvey from '../hooks/use-servey';
import { SurveyActions } from '../models/survey-actions';
import SurveyModalStep from './survey-modal-step';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: '8px 0 32px',
        width: 'calc(100% - 16px)'
      }
    }
  })
);

const SurveyModalStepIdentity: FC = () => {
  const { state, dispatch } = useSurvey();
  const classes = useStyles();

  const handleChange = (event: any) => {
    dispatch({
      type: SurveyActions.Save,
      payload: { [event.target.name]: event.target.value }
    });
  };

  return (
    <SurveyModalStep onNextClick={() => dispatch({ type: SurveyActions.Next })}>
      <DialogContent className={classes.root}>
        <FormLabel id="name-label">Name</FormLabel>
        <TextField id="name" name="name" value={state.name} onChange={handleChange} />
        <FormLabel id="email-label">Email</FormLabel>
        <TextField id="email" name="email" value={state.email} onChange={handleChange} />
      </DialogContent>
    </SurveyModalStep>
  );
};

export default SurveyModalStepIdentity;
