import { useContext } from 'react';
import { SurveyContext } from '../providers/survey-provider';

const useSurvey = () => {
  const context = useContext(SurveyContext);

  return context;
};

export default useSurvey;
