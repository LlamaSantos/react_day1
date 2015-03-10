'use strict';

var React = require('react');
var ListContainer = require('./listcontainer');
var AddList = require('./addlist');

var App = React.createClass({

  getInitialState() {
    return {
      lists: []
    };
  },

  onAdded(index, title, color) {
    // Use an Immutable Map for this shiz
    this.setState({
      lists: this.state.lists.concat(
        { title, index, color }
      )
    });
  },

  onRemove(index) {
    let newList = this.state.lists;
    newList.splice(index, 1);

    this.setState({
      lists: newList.map((list, idx) => {
        list.index = idx;
        return list;
      })
    });
  },

  render() {
    var showLists = this.state.lists.map((list) =>(
      <div key={list.index}>
        <ListContainer title={list.title} color={list.color} onRemove={this.onRemove.bind(this, list.index)} />
      </div>
    ));

    return (
      <div className="container">
        <AddList onAdd={this.onAdded.bind(this, this.state.lists.length)} />
        {showLists}
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
