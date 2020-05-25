class User {
  constructor(name, repolink, avatarlink) {
    this.name = name;
    this.reposLink = repolink;
    this.avatar = avatarlink;
    this.readmeLink = `https://raw.githubusercontent.com/${name}`;
  }
}

export default User;
