import React, { Component } from "react";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
  }
  edit() {
    this.setState({
      editing: true,
    });
  }
  remove() {
    alert("removing");
  }
  save(e) {
    e.preventDefault();
    this.props.onChange(this._newText.value, this.props.index);
    this.setState({
      editing: false,
    });
  }
  renderForm() {
    return (
      <div className="note">
        <form onSubmit={this.save}>
          <textarea ref={(input) => (this._newText = input)} />
          <button id="edit">
            <i className="fa fa-edit"></i>
          </button>
        </form>
      </div>
    );
  }
  renderDisplay() {
    return (
      <div className="note">
        <p className="text"> {this.props.children} </p>
        <span>
          <button onClick={this.edit} id="edit">
            <i className="fa fa-edit" />
          </button>
          <button onClick={this.remove} id="remove">
            <i className="fa fa-trash" />
          </button>
        </span>
      </div>
    );
  }
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}
export default Note;
