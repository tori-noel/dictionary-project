import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function search() {
    const apiKey = "43fa5d86069t4dbb87a934b227c8ob50";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "hRAT1yrOmcA1VHnv2f6p6fcCXHML02yvjoBm5gCRAGvKbuP1l2NMQt38";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: ` ${pexelsApiKey}` },
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
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
