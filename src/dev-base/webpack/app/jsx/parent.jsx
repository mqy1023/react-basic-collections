var React = require('react');
var Child = require('./child.jsx');

var Parent = React.createClass({
    render: function(){
        return (
            <div>
                <div> This is the parent. </div>
                <Child name="child"/>
            </div>
        )
    }
});

module.exports = Parent;