import React, { useState, useEffect } from "react";
import "./styles.css";
import SimilarSearch from "./similarsearch";

export default function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();

    setResponse(json);
  };

  function onChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Search</h1>
      <input type="text" onChange={onChange}></input>
      <SimilarSearch response={response} input={input} />
    </div>
  );
}
