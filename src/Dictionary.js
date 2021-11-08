import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert("Searching");
  }
  function handleInputChange(event) {
    setKeyword(event.target.value);
    console.log(keyword);
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
    </div>
  );
}
