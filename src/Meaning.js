import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4> ({props.meaning.partOfSpeech}) </h4>
      <p> {props.meaning.definition}</p>
      <Example example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
