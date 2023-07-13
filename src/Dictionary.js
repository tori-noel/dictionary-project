import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();

    alert(`Searching for ${keyword}`);
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
