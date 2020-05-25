class Repo {
  constructor(name, owner, description, default_branch) {
    this.name = name;
    this.owner = owner;
    this.description = description;
    this.default_branch = default_branch;
    this.link = default_branch;
    this.readme_link = `https://raw.githubusercontent.com/${owner}/${name}/${default_branch}/README.md`;
  }
}

export default Repo;
