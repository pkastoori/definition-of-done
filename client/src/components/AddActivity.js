import React, { Component } from "react";

class AddActivity extends Component {
  state = {
    content: "",
    status: "pending",
    createdAt: new Date().toLocaleDateString(),
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleClick = () => {
    this.props.add(this.state);
    this.setState({
      content: "",
    });
  };
  handleAllDone = () => {
    this.props.allDone();
  };
  render() {
    return (
      <div className="add-activity">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="content"
              type="text"
              placeholder="Enter an activity"
              className="validate"
              required
              value={this.state.content}
              onChange={this.handleChange}
            />
            <span className="helper-text" data-error="Required">
              Required
            </span>
          </div>
          <div className="col s3">
            <button
              className="btn-flat"
              disabled={!this.state.content}
              onClick={this.handleClick}
            >
              Add
            </button>
          </div>
          <div className="col s3">
            <button className="btn-flat" onClick={this.handleAllDone}>
              All Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddActivity;
