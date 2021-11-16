import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleInputChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleInputChange}
        ></input>
      </form>
      <Results data={results} />
    </div>
  );
}
