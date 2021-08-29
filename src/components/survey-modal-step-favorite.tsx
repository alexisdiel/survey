import {
  Checkbox,
  createStyles,
  DialogContent,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { FC, useState } from 'react';
import useSurvey from '../hooks/use-servey';
import { SurveyActions } from '../models/survey-actions';
import SurveyModalStep from './survey-modal-step';

const COLORS_OPTIONS = ['Black', 'Blue', 'Brown', 'Green', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow'];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 250,
      width: 250
    }
  }
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: '8px 0 32px',
        width: 'calc(100% - 16px)'
      }
    },
    formControl: {
      margin: '8px 0 32px',
      width: 'calc(100% - 16px)'
    }
  })
);
const SurveyModalStepFavorite: FC = () => {
  const { state, dispatch } = useSurvey();
  const classes = useStyles();
  const [error, setError] = useState(false);
  const { book, colors } = state;

  const handleChange = (event: any) => {
    dispatch({
      type: SurveyActions.Save,
      payload: { [event.target.name]: event.target.value }
    });
  };

  const validateStep = () => {
    const hasError = !book || !colors?.length;
    setError(hasError);
    !hasError && dispatch({ type: SurveyActions.Next });
  };

  const bookError = error && !book;
  const colorsError = error && !colors?.length;

  const stateColors = Array.isArray(state.colors) ? state.colors : [];
  return (
    <SurveyModalStep onNextClick={validateStep}>
      <DialogContent className={classes.root}>
        <FormLabel id="book-label" error={bookError}>
          Book
        </FormLabel>
        <TextField
          id="book"
          name="book"
          required
          value={state.book}
          error={bookError}
          helperText={bookError && 'Please this informatin is required.'}
          onChange={handleChange}
        />
        <FormControl className={classes.formControl} error={colorsError}>
          <FormLabel id="colors-label">Colors</FormLabel>
          <Select
            id="colors"
            name="colors"
            multiple
            required
            value={stateColors}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => (selected as string[]).join(', ')}
            MenuProps={MenuProps}
          >
            {COLORS_OPTIONS.map((color) => (
              <MenuItem key={color} value={color}>
                <Checkbox checked={state.colors?.indexOf(color) > -1} />
                <ListItemText primary={color} />
              </MenuItem>
            ))}
          </Select>
          {colorsError && <FormHelperText>Please select at least one option.</FormHelperText>}
        </FormControl>
      </DialogContent>
    </SurveyModalStep>
  );
};

export default SurveyModalStepFavorite;
