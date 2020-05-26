import { combineReducers } from "redux";


import repoReducer from "./repo/repo.reducer";

export default combineReducers({

  repo: repoReducer
});
