import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        {props.data.phonetics.map(function (phonetic, index) {
          return (
            <div>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning}></Meaning>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
