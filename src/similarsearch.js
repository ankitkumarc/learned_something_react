import React from "react";

function SimilarSearch({ response, input }) {
  const contents =
    input.length !== 0 ? (
      <ul>
        {response.map((content) =>
          content.title.includes(input) ? (
            <li key={content.id}>{content.title}</li>
          ) : (
            <ul />
          )
        )}
      </ul>
    ) : (
      <ul />
    );

  return <div>{contents}</div>;
}

export default SimilarSearch;
