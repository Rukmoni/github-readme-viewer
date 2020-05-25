import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import marked from "marked";

const ChangeLog = props => {
  const reposList = useSelector(state => state.repo);
  //console.log(reposList);
  const repo = reposList.repo.find(
    element => element.name === props.match.params.id
  );
  console.log(repo.readme_link);
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(repo.readme_link)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkdown(marked(text));
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (
    <section>
      <article dangerouslySetInnerHTML={{ __html: markdown }} />
    </section>
  );
};

export default ChangeLog;
