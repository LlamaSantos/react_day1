'use strict';

import React from 'react';
import AddItem from './additem';

export default React.createClass({

  getInitialState() {
    return {
      listName: '',
      color: '#FFACEC'
    }
  },

  handleClick() {
    this.props.onAdd(this.state.listName, this.state.color);
    this.setState({
      listName: '',
      color: this.state.color
    });
  },

  handleKeyDown(e) {
    if (e.keyCode === 13){
      this.handleClick();
    }
  },

  handleChange(e){
    this.setState({
      color: this.state.color,
      listName: e.target.value
    });
  },

  handleColor(color) {
    this.setState({
      listName : this.state.listName,
      color : color
    });
  },

  render() {
    var styles = {
      color : {
        width : "20%",
        height: "50px",
        display: "inline-block",
        cursor: "pointer",
        background: ""
      }
    };

    var colors = {
      pink: '#FFACEC',
      white: '#ECF0F1',
      blue: '#3498DB',
      yellow: '#E7D171',
      green: '#7AE77C'
    };

    var list = Object.keys(colors).map((key) => {
        var localStyle = JSON.parse(JSON.stringify(styles.color));
        localStyle.background = colors[key];
        return (
          <span style={localStyle} key={key} onClick={this.handleColor.bind(this, localStyle.background)} />
        );
      }
    );

    var currentColorStyle = {
      height: "15px",
      width: "15px",
      display: "inline-block",
      background: this.state.color
    };

    return (
      <div className='col-sm-6'>
        <h3 className='text-center'>Create New List</h3>
        <span className=''>List Name:</span>
        <input className='form-control'
               placeholder='list name'
               onChange={this.handleChange}
               onKeyDown={this.handleKeyDown}
               value={this.state.listName}/>
        <br />
        <span>List Background Color:</span><span style={currentColorStyle}></span>
        <br />
        {list}
        <br />
        <button className='btn btn-primary' onClick={this.handleClick}>Submit</button>
      </div>
    );
  }

});
