import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let key = "43fa5d86069t4dbb87a934b227c8ob50";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;

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
    </div>
  );
}
