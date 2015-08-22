var React = require('react'),
    Button = require("./components/button.component");

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Welcome to react!! Awesome!</h1>
        <Button text="Click me!!" />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("container"));
