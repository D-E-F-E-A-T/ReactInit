var React = require('react');
var ReactDOM = require('react-dom');
//var App = React.createElement('h1', null, "Hello World");
//var App = <h1> Hello World </h1>;// JSX
var Component = function(props) {
  return (
    <div style={{color:props.color}}>
      <h1>{props.greeting}</h1>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Component greeting="Hello World" color="blue" />
    <Component greeting="Hey there" color="green" />
  </div>,
  document.getElementById('root')
);
