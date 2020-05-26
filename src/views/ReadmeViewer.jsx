import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import marked from "marked";

const ReadmeViewer = props => {
  const repos = useSelector(state => state.repo);
  const selectedRepo = repos.selectedRepo;

  function getLink(srepo) {
    const repo = repos.repo.find(element => element.name === srepo);
    return repo.readme_link;
  }

  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    if (selectedRepo !== "") {
      let link = getLink(selectedRepo);
      fetch(link)
        .then(response => {
          return response.text();
        })
        .then(text => {
          setMarkdown(marked(text));
        })
        .catch(error => {
          console.log(error);
        });
    }

    /*    fetch(repo.readme_link)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkdown(marked(text));
      })
      .catch(error => {
        console.log(error);
      });  */
  });
  return (
    <section style={{ marginTop: 50 }}>
      <article dangerouslySetInnerHTML={{ __html: markdown }} />
    </section>
  );
};

export default ReadmeViewer;
