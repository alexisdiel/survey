import SurveyModal from './components/survey-modal';
import { SurveyProvider } from './providers/survey-provider';

const App = () => {
  return (
    <SurveyProvider>
      <SurveyModal />
    </SurveyProvider>
  );
};

export default App;
