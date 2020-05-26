import React from "react";

import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch } from "react-redux";
import { openReadme } from "../store/repo/repo.action";

export default function ReposItem({ repo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <ListItem button href={repo.name}>
        <ListItemText
          primary={repo.name}
          onClick={() => {
            dispatch(openReadme(repo.name));
          }}
        />
      </ListItem>
      {/* <Link to={r.name} params={{ link: "linked" }}>
        <Button to={r.name}>{r.name}</Button>
      </Link> */}
    </div>
  );
}
