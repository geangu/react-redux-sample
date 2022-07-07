import { Provider, useSelector } from 'react-redux';
import Counter from './components/Counter';
import store from './data/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
