import { Provider, useSelector } from 'react-redux';
import Counter from './components/Counter';
import ModifyFromAPI from './components/ModifyFromAPI';
import store from './data/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <ModifyFromAPI />
    </Provider>
  );
};

export default App;
