import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong>

            <p> {definition.definition}</p>
            <hr />
            <strong>Example:</strong>
            <em>
              <p>{definition.example}</p>
            </em>
            <Synonyms synonyms={definition.synonyms}></Synonyms>
          </div>
        );
      })}
    </div>
  );
}
