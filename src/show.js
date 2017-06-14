// All conponents are here
var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

var Title = createClass({
  render: function() {
    return (
      <h3>Title: Frinds</h3>
    );
  }
});

var Poster = createClass({
  render: function() {
    return(
      <img src="https://www.movieposter.com/posters/archive/main/52/MPW-26106"
      alt = "Show Poster" style={{width: 400, height: 400}}/>
    );
  }
});

var ShowInfo = createClass({
  render: function() {
    return(
      <div>
        <p>Follows the personal and professional lives of six 20 to 30</p>
        <h5>IMDB Rating: 9.0</h5>
      </div>
    );
  }
});

var Show = createClass({
  render: function() {
    return (
      <div className="text-center">
        <Title/>
        <Poster/>
        <ShowInfo/>
      </div>
    );
  }
});
module.exports = Show; // import Show
