import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function ReposList() {
  const reposList = useSelector(state => state.repo)




  var repos = reposList.repo.map(r => (
    <div key={r.name}>
      <Link to={r.name} params={{ link: "linked" }}>
        {r.name}
      </Link>
    </div>
  ));
  return repos;
}
