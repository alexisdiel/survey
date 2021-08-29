import { SurveySteps } from './survey-steps';

export interface SurveyState {
  name: string;
  email: string;
  age: number;
  gender: string;
  book: string;
  colors: string[];
  submitted: boolean;
  showFeedback: boolean;
  activeStep: SurveySteps;
}
