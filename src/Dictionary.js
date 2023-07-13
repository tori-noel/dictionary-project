import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let key = "43fa5d86069t4dbb87a934b227c8ob50";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    axios.get(apiUrl).then(handleResponse);
  }
  function handlekKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handlekKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
