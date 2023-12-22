const initialColor = {
  color: "dark",
};

const colorModeReducer = (state = initialColor, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_THEME":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default colorModeReducer;
