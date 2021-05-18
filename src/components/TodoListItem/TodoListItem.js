import React, { Component } from 'react';
import './TodoListItem.css';


export class TodoListItem extends Component {

  constructor() {
    super();
    this.state = {
      done: false
    }
    this.labelOnClick = () => this.setState({ done: true });
  } 

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    let classNames = "todo-list-item";
    if(done) classNames += ' done';

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    }
    return (
        <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={style}
        onClick={this.labelOnClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-end">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-end">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
  }
};