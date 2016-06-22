/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

import React from 'react';
import Header from './common/header';

//var RouteHandler = require('react-router').RouteHandler;
//$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
                    {this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = App;