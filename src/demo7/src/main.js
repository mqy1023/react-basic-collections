import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

import ico from './favicon.ico';

var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
)