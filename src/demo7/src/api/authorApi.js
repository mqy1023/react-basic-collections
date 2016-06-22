"use strict";

//This file is mocking a web API by hitting hard coded data.
//var authors = require('./authorData').authors;
//var _ = require('lodash');

import {authors} from './authorData';
import _ from 'lodash';

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var AuthorApi = {
	getAllAuthors: function() {
		return authors;
	},

	getAuthorById: function(id) {
		return _.find(authors, {id: id});
	},
	
	saveAuthor: function(author) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		//Just simulating creation here.
		//The server would generate ids for new authors in a real app.
		if (!author.id) {
			author.id = _generateId(author);
			authors.push(author);
		}

		return author;
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
	}
};

module.exports = AuthorApi;