'use strict';

var React = require('react');

var Button = React.createClass({
  handleClick: function () {
    console.log("Button clicked!!");
  },
  render: function () {
    return (
      <button onClick={this.handleClick}>{this.props.text}</button>
    );
  }
});

module.exports = Button;