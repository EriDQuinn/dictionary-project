import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results border">
        <h2 className="word">{props.data.word}</h2>
        <div className="phonetic">
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>

        <section className="Meaning">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning}></Meaning>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
