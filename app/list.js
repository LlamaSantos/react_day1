'use strict';

import React from 'react';

module.exports = React.createClass({

  handleRemove(index) {
    this.props.onRemoveItem(index);
  },

  render() {
    var styles = {
      uList: {
        paddingLeft: 0,
        listStyleType: "none"
      },
      listGroup: {
        margin: '5px 0',
        borderRadius: 5
      },
      removeItem: {
        fontSize: 20,
        float: 'left',
        position: 'absolute',
        top: 12,
        left: 6,
        cursor: 'pointer',
        color: "rgb(222, 79, 79)"
      },
      todoItem: {
        paddingLeft: 29,
        fontSize: 17
      }
    };

    var listItems = this.props.items.map((item, index) => (
      <li className='list-group-item' styles={styles.listGroup} key={index}>
        <span className="glyphicon glyphicon-remove"
              style={styles.removeItem}
              onClick={this.handleRemove.bind(this, index)} />
        <span style={styles.todoItem}>{item}</span>
      </li>
    ));

    return (
      <ul style={styles.uList}>
        {listItems}
      </ul>
    );
  }

});
