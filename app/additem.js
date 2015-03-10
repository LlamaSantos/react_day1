'use strict';

import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      newItem : ''
    }
  },

  handleChange(e) {
    this.setState({
      newItem : e.target.value
    })
  },

  handleSubmit(event) {
    if (event.keyCode === 13){
      this.props.onAddItem(this.state.newItem);
      this.setState({
        newItem : ''
      });
    }
  },

  render() {
    return (
      <div>
        <input type='text'
               className='form-control'
               value={this.state.newItem}
               placeholder='New Item'
               onKeyDown={this.handleSubmit}
               onChange={this.handleChange}/>
      </div>
    );
  }
});
