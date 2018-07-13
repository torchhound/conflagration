import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Catalog from './components/Catalog'
import registerServiceWorker from './registerServiceWorker';
import Firebase from 'firebase';
import dotenv from 'dotenv';
import { BrowserRouter as Router, Route } from 'react-router-dom';

dotenv.config()

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}
let FirebaseApp = Firebase.initializeApp(config)

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/catalog" component={Catalog} />
      </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
