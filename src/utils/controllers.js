import Repo from '../models/repo';
function mapJsonToRepo(payload){
    var repos = payload.data.map(
        o => new Repo(o.name, o.owner.login, o.description, o.default_branch)
      );
      return repos;
}