export default (state = -1, action) => {
  switch (action.type) {
    case "CHANGE_DIRECTION":
      return action.payload;
    default:
      return state;
  }
};
