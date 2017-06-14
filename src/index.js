var React = require('react');
var ReactDOM = require('react-dom');
//var App = React.createElement('h1', null, "Hello World");
//var App = <h1> Hello World </h1>;// JSX
var Component = function() {
  return (
    <h1>Hello World</h1>
  );
}
ReactDOM.render(
  <Component/>,
  document.getElementById('root')
);
