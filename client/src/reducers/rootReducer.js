const initState = {
  checklist: [],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD") {
    let checklist = [...state.checklist, action.payload];
    return {
      ...state,
      checklist,
    };
  }
  if (action.type === "DELETE") {
    let checklist = state.checklist.filter(
      (activity) => activity._id !== action.payload
    );
    return {
      ...state,
      checklist,
    };
  }
  if (action.type === "DONE") {
    let checklist = state.checklist.map((activity) => {
      if (activity._id === action.payload) {
        activity.status = "completed";
      }
      return activity;
    });
    return {
      ...state,
      checklist,
    };
  }
  if (action.type === "ALL_DONE") {
    let checklist = state.checklist.map((activity) => {
      activity.status = "completed";
      return activity;
    });
    return {
      ...state,
      checklist,
    };
  }
  if (action.type === "GET") {
    let checklist = action.payload;
    return {
      ...state,
      checklist,
    };
  }
  return state;
};

export default rootReducer;
