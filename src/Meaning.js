import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning text-justify">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        console.log(definition);
        return (
          <div key={index} className="meanings">
            <strong>Definition:</strong>
            <p> {definition.definition}</p>
            <strong>Example:</strong>
            <em>
              <p>{definition.example}</p>
            </em>
            <strong>Synonyms:</strong>
            <Synonyms synonyms={definition.synonyms}></Synonyms>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
