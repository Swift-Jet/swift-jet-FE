const bookingReducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKING":
      return {
        ...state
      };

    default:
     return state;
  }
};

export default bookingReducer;
