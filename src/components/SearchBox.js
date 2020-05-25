import React from "react";
import { useDispatch } from "react-redux";
import {setRepo} from "../store/repo/repo.action";
import {fetchUserRepo} from "../utils/api";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const dispatch = useDispatch();
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
  
    fetchUserRepo("Rukmoni").then(data =>
      dispatch(setRepo({ user: "Rukmoni", data: data }))
    ); 
   
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter GitHub UserName"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
