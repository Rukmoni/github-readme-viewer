import React from "react";
import { useDispatch } from "react-redux";
import { setRepo } from "../store/repo/repo.action";
import { fetchUserRepo } from "../controllers/api";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const dispatch = useDispatch();
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    if (searchTerm) {
      fetchUserRepo(searchTerm).then(data =>
        dispatch(setRepo({ user: searchTerm, data: data }))
      );
    } else {
      console.log("Show alert");
    }
    //fetchUserRepo("Rukmoni").then(data => console.log(data));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter GitHub UserName"
        value={searchTerm}
        onChange={handleChange}
        style={{ width: 300 }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
