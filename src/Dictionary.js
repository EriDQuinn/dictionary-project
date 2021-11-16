import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponseWords(response) {
    setResults(response.data[0]);
  }
  function handleResponseImages(response) {
    setPhotos(response.data.photos);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponseWords);
    let pexelsApiKey = `563492ad6f917000010000016232d6ff36f742b39a04033419fe5a53`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handleResponseImages);
  }
  function handleInputChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary m-2">
      <div className="row">
        <section className="col">
          <h1 className="mb-5">Dictionary</h1>
          <form onSubmit={search}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleInputChange}
            ></input>
          </form>
          <section>
            <Photos photos={photos} />
          </section>
        </section>
        <section className="col">
          {" "}
          <Results data={results} />
        </section>
      </div>
    </div>
  );
}
