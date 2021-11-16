import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning text-justify">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="meanings">
            <strong>Definition:</strong>
            <p> {definition.definition}</p>
            <strong>Example:</strong>
            <em>
              <p>{definition.example}</p>
            </em>
            <Synonyms synonyms={definition.synonyms}></Synonyms>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
