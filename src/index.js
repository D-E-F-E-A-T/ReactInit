var React = require('react');
var ReactDOM = require('react-dom');
//var App = React.createElement('h1', null, "Hello World");
//var App = <h1> Hello World </h1>;// JSX
var Component = function(props) {
  return (
    <h1>{props.greeting}</h1>
  );
}
ReactDOM.render(
  <Component greeting="Hello World" />,
  document.getElementById('root')
);
