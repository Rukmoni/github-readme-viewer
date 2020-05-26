import userActions from "./user.type";
import User from "../../models/user";
const INIT_STATE = {
  user: ""
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userActions.GET_USER_REPOS:
      return {
        ...state,
        user: action.payload
      };
    case userActions.SET_USER_DATA:
      let userData = action.payload;
      let newUser = new User(
        userData.login,
        userData.repos_url,
        userData.avatar_url
      );
      return {
        ...state,
        user: newUser
      };
    default:
      return state;
  }
};
export default userReducer;
