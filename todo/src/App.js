import './App.css';
import {Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

import Routes from './Routes';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
