import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import reducer from '../reducers';

const reducer = ( state= {}, action ) => state; // reducer paleativo apenas para verificar se o estado global está funcionando.

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;