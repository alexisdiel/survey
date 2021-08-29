import { SurveyState } from '../models/survey-state';
import { SurveySteps } from '../models/survey-steps';

const SURVEY_STORAGE_KEY = 'STORED_SURVEY';

const INITIAL_STATE: SurveyState = {
  name: '',
  email: '',
  age: 0,
  gender: '',
  book: '',
  colors: [],
  submitted: false,
  showFeedback: false,
  activeStep: SurveySteps.Identity
};

const SurveyStorage = {
  get: (): SurveyState => {
    const survey = localStorage.getItem(SURVEY_STORAGE_KEY);
    return survey ? JSON.parse(survey) : INITIAL_STATE;
  },
  save: (survey: SurveyState): void => {
    localStorage.setItem(SURVEY_STORAGE_KEY, JSON.stringify(survey));
  }
};

export default SurveyStorage;
