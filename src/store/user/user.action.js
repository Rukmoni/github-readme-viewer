import userActions from "./user.type";

export const getUser = userName => ({
  type: userActions.GET_USER_REPOS,
  payload: userName
});

export const setUserData = userData => ({
  type: userActions.SET_USER_DATA,
  payload: userData
});
