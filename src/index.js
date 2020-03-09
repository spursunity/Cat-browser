import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Reducers from './redux/reducers';
import sagas from './sagas';
import CatsPage from './pages/CatsPage';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);


class App extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <CatsPage />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
