import { SurveyActions } from '../models/survey-actions';
import { SurveyReducerAction } from '../models/survey-reducer-action';
import { SurveyState } from '../models/survey-state';
import SurveyStorage from './survey-storage';

const HandleNewState = (newSurveyState: SurveyState): SurveyState => {
  SurveyStorage.save(newSurveyState);
  return newSurveyState;
};

const SurveyReducer = (state: SurveyState, action: SurveyReducerAction): SurveyState => {
  switch (action.type) {
    case SurveyActions.Next:
      return HandleNewState({ ...state, activeStep: state.activeStep + 1 });
    case SurveyActions.Previous:
      return HandleNewState({ ...state, activeStep: state.activeStep - 1 });
    case SurveyActions.Submit:
      return HandleNewState({ ...state, submitted: true, showFeedback: true });
    case SurveyActions.Save:
      return HandleNewState({ ...state, ...action.payload });
    case SurveyActions.Error:
      return HandleNewState({ ...state, ...action.payload });
    case SurveyActions.CloseFeedback:
      return HandleNewState({ ...state, showFeedback: false });
    default:
      return state;
  }
};

export default SurveyReducer;
