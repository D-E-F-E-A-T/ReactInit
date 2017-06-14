var React = require('react');
var ReactDOM = require('react-dom');
//var App = React.createElement('h1', null, "Hello World");
//var App = <h1> Hello World </h1>;// JSX
var Component = function(props) {
  var style = {
    color: props.color
  };
  return (
    <div style={style}>
      <h1>{props.greeting}</h1>
    </div>
  );
}
ReactDOM.render(
  <Component greeting="Hello World" color="green" />,
  document.getElementById('root')
);
