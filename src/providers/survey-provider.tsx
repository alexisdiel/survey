import { createContext, FC, useReducer } from 'react';
import { SurveyState } from '../models/survey-state';
import SurveyReducer from '../services/survey-reducer';
import SurveyStorage from '../services/survey-storage';

const initialSurvey: SurveyState = SurveyStorage.get();

export const SurveyContext = createContext<{
  state: SurveyState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialSurvey,
  dispatch: () => null
});

export const SurveyProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, initialSurvey);

  return <SurveyContext.Provider value={{ state, dispatch }}>{children}</SurveyContext.Provider>;
};
