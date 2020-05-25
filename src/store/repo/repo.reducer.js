import REPO_ACTIONS from './repo.actionTypes';
import {fetchUserRepo} from '../../utils/api';
import Repo from '../../models/repo';
const initialState={
    user:'',
    repo:[],
    count:0
}
 const RepoReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case REPO_ACTIONS.FETCH_REPO_DATA:
           
            let repoData=fetchUserRepo(payload)
            console.log(repoData)
            return {
                state
            }
        case REPO_ACTIONS.FETCH_REPO_SUCCESS:
          
            let newuser=payload.user;
            let newcount=payload.data.length;
            let newrepos=mapJsonToRepo(payload);
           
            return {...state,
            user:newuser,count:newcount,repo:newrepos};
        default:
            return state
    }
}

export default RepoReducer;

function mapJsonToRepo(payload){
    var repos = payload.data.map(
        o => new Repo(o.name, o.owner.login, o.description, o.default_branch)
      );
      return repos;
}