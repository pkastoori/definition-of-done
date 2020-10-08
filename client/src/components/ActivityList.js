import React, { Component } from "react";

export default class ActivityList extends Component {
  handleClick = () => {
    this.props.delete(this.props.id);
  };
  handleDone = () => {
    this.props.done(this.props.id);
  };
  render() {
    return (
      <div className="row">
        <div className="col s8">
          <h6>
            {this.props.content} (Created at {this.props.createdAt})
          </h6>
        </div>
        <div className="col s2">
          <button className="btn-flat" onClick={this.handleDone}>
            Done
          </button>
        </div>
        <div className="col s2">
          <button className="btn-flat" onClick={this.handleClick}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
