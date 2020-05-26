import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import repoReducer from "./repo/repo.reducer";

export default combineReducers({
  user: userReducer,
  repo: repoReducer
});
