import RepoActions from "./repo.type";

export const setRepo = props => ({
  type: RepoActions.UPDATE_REPO_LIST,
  payload: props
});

export const openReadme = url => ({
  type: RepoActions.OPEN_READ_ME,
  payload: url
});
