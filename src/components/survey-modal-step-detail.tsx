import {
  createStyles,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from '@material-ui/core';
import { FC, useState } from 'react';
import useSurvey from '../hooks/use-servey';
import { SurveyActions } from '../models/survey-actions';
import SurveyModalStep from './survey-modal-step';

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      margin: '8px 0 32px',
      width: 'calc(100% - 16px)'
    }
  })
);

const AGE_OPTIONS = [10, 20, 30, 40, 50, 60, 70, 80];
const GENDER_OPTIONS = ['Female', 'Male', 'Other', 'None'];

const SurveyModalStepDetail: FC = () => {
  const { state, dispatch } = useSurvey();
  const classes = useStyles();
  const [error, setError] = useState(false);
  const { age, gender } = state;

  const handleChange = (event: any) => {
    dispatch({
      type: SurveyActions.Save,
      payload: { [event.target.name]: event.target.value }
    });
  };

  const validateStep = () => {
    const hasError = !age || !gender;
    setError(hasError);
    !hasError && dispatch({ type: SurveyActions.Next });
  };

  const ageError = error && !age;
  const genderError = error && !gender;

  return (
    <SurveyModalStep onNextClick={validateStep}>
      <DialogContent>
        <FormControl className={classes.formControl} error={ageError}>
          <FormLabel id="age-label">Age</FormLabel>
          <Select id="age" name="age" required value={state.age} onChange={handleChange}>
            {AGE_OPTIONS.map((age, key) => (
              <MenuItem key={key} selected={state.age === age} value={age}>
                {age}
              </MenuItem>
            ))}
          </Select>
          {ageError && <FormHelperText>Please select an option.</FormHelperText>}
        </FormControl>
        <FormControl className={classes.formControl} error={genderError}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup id="gender" name="gender" value={state.gender} onChange={handleChange}>
            {GENDER_OPTIONS.map((gender) => (
              <FormControlLabel key={gender} value={gender} control={<Radio />} label={gender} />
            ))}
          </RadioGroup>
          {genderError && <FormHelperText>Please select an option.</FormHelperText>}
        </FormControl>
      </DialogContent>
    </SurveyModalStep>
  );
};

export default SurveyModalStepDetail;
