import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RepoItem from "./RepoItem";

export default function ReposList() {
  const reposList = useSelector(state => state.repo);

  var repos = reposList.repo.map(r => <RepoItem key={r.name} repo={r} />);
  return <div style={{ marginTop: 70, marginLeft: 10 }}>{repos}</div>;
}
