const changeTheme = (color) => {
  return {
    type: "CHANGE_COLOR_THEME",
    payload: color,
  };
};

export default changeTheme;
