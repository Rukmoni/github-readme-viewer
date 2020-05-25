import REPO_ACTIONS from './repo.actionTypes';

export const setRepo=(data)=>{

    return{
        type:REPO_ACTIONS.FETCH_REPO_SUCCESS,
        payload:data
    }
}
