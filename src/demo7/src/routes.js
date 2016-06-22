//"use strict";

import React from 'react';
import App from './components/app';
import HomePage from './components/homePage';
import AuthorPage from './components/authors/authorPage';
import ManageAuthorPage from './components/authors/manageAuthorPage';
import About from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';
import { Route, Redirect, IndexRoute, hashHistory } from 'react-router';


var routes = (
  <Route path="/" history={hashHistory} component={App}>
    <IndexRoute component={HomePage} />
    <Route path="authors" component={AuthorPage} />
    <Route path="addAuthor" component={ManageAuthorPage} />
    <Route path="author/:id" component={ManageAuthorPage} />
    <Route path="about" component={About} />
    <Redirect from="about-us" to="about" />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

module.exports = routes;