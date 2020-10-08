import React, { Component } from "react";
import AddActivity from "./AddActivity";
import ActivityList from "./ActivityList";
import { connect } from "react-redux";
import {
  addActivity,
  deleteActivity,
  markAsDone,
  allDone,
  getActivities,
} from "../actions/checklistActions";

class Checklist extends Component {
  componentDidMount() {
    this.props.getActivities();
  }
  render() {
    return (
      <div className="checklist container">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Checklist</span>
            <AddActivity add={this.props.add} allDone={this.props.allDone} />
            {this.props.checklist?.filter(
              (activity) => activity.status === "pending"
            ).length > 0 ? (
              this.props.checklist
                .filter((activity) => activity.status === "pending")
                .map((activity) => (
                  <ActivityList
                    key={activity._id}
                    id={activity._id}
                    content={activity.content}
                    createdAt={activity.createdAt}
                    delete={this.props.delete}
                    done={this.props.done}
                  />
                ))
            ) : (
              <p>No pending activities!</p>
            )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    add: (activity) => {
      dispatch(addActivity(activity));
    },
    delete: (id) => {
      dispatch(deleteActivity(id));
    },
    done: (id) => {
      dispatch(markAsDone(id));
    },
    allDone: () => {
      dispatch(allDone());
    },
    getActivities: () => {
      dispatch(getActivities());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
