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
  apiKey: 'AIzaSyCVC54ShrF5teBwUl_le5p31eu3f4D-v84',
  authDomain: 'conflagration-91331.firebaseapp.com',
  databaseURL: 'https://conflagration-91331.firebaseio.com',
  projectId: 'conflagration-91331',
  storageBucket: 'conflagration-91331.appspot.com'
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
