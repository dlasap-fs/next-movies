import Router from "next/router";
import { useState } from "react";

export default function SearchMovieBar({ currentTerm }) {
  const [input, setInput] = useState(currentTerm ?? "");
  const redirectSearch = (e) => {
    e.preventDefault();
    Router.push("/movies/search/" + input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form onSubmit={(e) => redirectSearch(e)}>
        <input type="search" placeholder="Search Movies..." value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
