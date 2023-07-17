import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    console.log(response);
  }
  function search() {
    let key = "43fa5d86069t4dbb87a934b227c8ob50";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "hRAT1yrOmcA1VHnv2f6p6fcCXHML02yvjoBm5gCRAGvKbuP1l2NMQt38";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    axios
      .get(pexelsApiUrl, {
        header: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlekKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2> What word would you like to search for?</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="search"
              onChange={handlekKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>

          <Results results={results} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
