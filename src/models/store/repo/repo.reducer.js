import Repo from "../../models/repo";
import repoActions from "./repo.type";
const INIT_STATE = {
  user: "",
  repo: [],
  count: 0
};
const repoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case repoActions.UPDATE_REPO_LIST:
      console.log("action.payload.user");
      console.log(action.payload.user);
      let resData = mapJsonToRepos(action.payload);
      let newCount = Object.keys(action.payload.data).length;

      if (newCount > 0)
        return {
          ...state,
          user: action.payload.user,
          repo: resData,
          count: newCount
        };

      return state;
    default:
      return state;
  }
};
export default repoReducer;

const mapJsonToRepos = payload => {
  var repos = payload.data.map(
    o => new Repo(o.name, o.owner.login, o.description, o.default_branch)
  );
  return repos;
};
