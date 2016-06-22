//"use strict";

import React from 'react';
import {Link} from 'react-router';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';
var AuthorStore = require('../../stores/authorStore');

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors()
		};
	},

    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },

    //Clean up when this component is unmounted
    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },


    render: function() {
		return (
			<div>
				<h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = AuthorPage;