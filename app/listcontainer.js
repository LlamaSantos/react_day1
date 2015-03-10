'use strict';

import React from 'react';
import AddItem from './additem';
import List from './list';

module.exports = React.createClass({
  getInitialState() {
    return {
      list: []
    }
  },

  handleAddItem(item) {
    this.setState({
      list: this.state.list.concat(item)
    });
  },

  handleRemoveItem(index) {
    var newlist = this.state.list;
    newlist.splice(index, 1);
    this.setState({
      list: newlist
    });
  },

  handleRemove() {
    this.props.onRemove();
  },

  render() {
    var styles = {
      container: {
        border: "1px solid rgb(208, 208, 208)",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        background: this.props.color
      },
      remove: {
        top: 15,
        color: "rgb(222, 79, 79)",
        float: "left",
        cursor: 'pointer'
      }
    };

    return (
      <div className="col-sm-6">
        <div className="col-sm-12" style={styles.container}>
          <span className="glyphicon glyphicon-remove" style={styles.remove} onClick={this.handleRemove}></span>
          <h3 className="text-center"> {this.props.title} </h3>
            <AddItem onAddItem={this.handleAddItem} />
            <List onRemoveItem={this.handleRemoveItem} items={this.state.list}/>
        </div>
      </div>
    );
  }

});
