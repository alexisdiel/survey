import { createStyles, DialogContent, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FC } from 'react';
import useSurvey from '../hooks/use-servey';
import SurveyModalStep from './survey-modal-step';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: '10px',
        width: '46%'
      }
    }
  })
);

const SurveyModalStepSummary: FC = () => {
  const { state } = useSurvey();
  const classes = useStyles();
  return (
    <SurveyModalStep>
      <DialogContent className={classes.root}>
        <TextField
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
          label="Name"
          defaultValue={state.name}
        />
        <TextField
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
          label="E-mail"
          defaultValue={state.email}
        />
        <TextField
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
          label="Age"
          defaultValue={state.age}
        />
        <TextField
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
          label="Gender"
          defaultValue={state.gender}
        />
        <TextField
          InputProps={{
            readOnly: true
          }}
          fullWidth
          variant="outlined"
          label="Book"
          defaultValue={state.book}
        />
        <TextField
          InputProps={{
            readOnly: true
          }}
          fullWidth
          variant="outlined"
          label="Colors"
          defaultValue={state.colors.join(', ')}
        />
      </DialogContent>
    </SurveyModalStep>
  );
};

export default SurveyModalStepSummary;
