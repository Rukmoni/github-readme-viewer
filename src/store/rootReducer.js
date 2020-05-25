import { combineReducers } from 'redux'
import RepoReducer from './repo/repo.reducer';

 const rootReducer = combineReducers({
   
  repo:RepoReducer
})
export default rootReducer;