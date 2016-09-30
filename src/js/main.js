import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import EmailList from './components/EmailList';
import EmailInput from './components/EmailInput';
import EmailReview from './components/EmailReview';
import store from './store';
import { Provider } from  'react-redux';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={EmailList} />
      <Route path='/add-email' component={EmailInput} />
      <Route path='list/:emailReview' component={EmailReview} />
    </Route>
  	</Router>
  </Provider>
)

        ReactDOM.render(
        	router,
        document.getElementById('content')
);

