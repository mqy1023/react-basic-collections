//"use strict";

import React from 'react';
import AuthorForm from './authorForm';
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
//import toastr from 'toastr';

var ManageAuthorPage = React.createClass({

    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    },

    routerWillLeave(nextLocation) {
        if (!this.state.isSaved)
            return 'Your work is not saved! Are you sure you want to leave?'
    },

    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            isSaved: true
        };
    },

    componentWillMount: function () {
        var authorId = this.props.params.id; //from the path '/author:id'

        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },
    //for react-router2.0
    componentDidMount: function() {
        const { route } = this.props;
        const { router } = this.context;
        router.setRouteLeaveHook(route, this.routerWillLeave);
    },

    setAuthorState: function (event) {
        this.setState({isSaved: false});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    authorFormIsValid: function () {

        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors.

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function (event) {
        this.setState({isSaved: true});
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }
        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }

        //toastr.success('Author saved.');
        this.context.router.push('/authors');
    },

    render: function () {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManageAuthorPage;