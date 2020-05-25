

  export async function fetchUserRepo(name) {
  let response = await fetch(`https://api.github.com/users/${name}/repos`);
  let data = await response.json();
  return data;
} 



