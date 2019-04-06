const AppActionTypes = {
  INITIAL_LOAD: "appActions/INITIAL_LOAD"
};

const AppActions = {
  initialLoad: payload => ({ type: AppActionTypes.INITIAL_LOAD, payload })
};

export { AppActionTypes, AppActions };
