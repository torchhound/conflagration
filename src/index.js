import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Catalog from './components/Catalog';
import Thread from './components/Thread';
import registerServiceWorker from './registerServiceWorker';
import Firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import imageboard from './actions/reducers';
import thunk from 'redux-thunk';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};
Firebase.initializeApp(config);

const firestore = Firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

const store = createStore(imageboard, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/catalog/:board" component={Catalog} />
          <Route exact path="/thread/:thread" component={Thread} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
