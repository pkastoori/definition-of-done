import React, { Component } from "react";
import { connect } from "react-redux";

class Done extends Component {
  render() {
    return (
      <div className="done container">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Done</span>
            <div className="row">
              {this.props.checklist?.filter(
                (activity) => activity.status === "completed"
              ).length > 0 ? (
                this.props.checklist
                  .filter((activity) => activity.status === "completed")
                  .map((activity) => (
                    <div key={activity._id}>
                      <div className="col s12">
                        <del>
                          {activity.content} (Created at {activity.createdAt})
                        </del>
                      </div>
                    </div>
                  ))
              ) : (
                <p>No activities!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checklist: state.checklist,
  };
};

export default connect(mapStateToProps)(Done);
