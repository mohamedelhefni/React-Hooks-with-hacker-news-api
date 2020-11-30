import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/search";
import Content from "./components/content";
import LoadButton from "./components/loadMore";
import Options from "./components/options";
const App = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("coding");
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [options, setOptions] = useState("");
  const [hits, sethits] = useState("");
  useEffect(() => {
    let ourQuery =
      options.length > 0
        ? `https://hn.algolia.com/api/v1/search?query=${query}?tags=${options}`
        : `https://hn.algolia.com/api/v1/search?query=${query}`;
    axios
      .get(ourQuery)
      .then(response => {
        setResults(response.data.hits);
        setLoading(false);
        sethits(response.data.nbHits);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query, options]);

  const loadMore = () => {
    let ourQuery =
      options.length > 0
        ? `https://hn.algolia.com/api/v1/search?query=${query}?tags=${options}&p=${page}`
        : `https://hn.algolia.com/api/v1/search?query=${query}?p=${page}`;
    setIsLoadingMore(true);
    setPage(page + 1);
    axios.get(ourQuery).then(response => {
      setResults([...results, ...response.data.hits]);
      setIsLoadingMore(false);
    });
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl text-teal-500 text-center my-5  font-bold">
          HackerNews Api With React
        </h1>
        <Search
          search={search}
          setQuery={setQuery}
          setSearch={setSearch}
          setLoading={setLoading}
          setPage={setPage}
        />

        <div className="flex flex-wrap items-center justify-between mx-3">
          <Options
            setOptions={setOptions}
            setPage={setPage}
            setLoading={setLoading}
          />

          <div className="numberofhits">
            <p className="font-bold">
              <span className="text-gray-800">Results</span>{" "}
              <span className="text-teal-500"> {hits} </span>
            </p>
          </div>
        </div>

        <Content loading={loading} results={results} />

        {loading ? (
          ""
        ) : (
          <LoadButton loadMore={loadMore} isLoadingMore={isLoadingMore} />
        )}
      </div>
    </div>
  );
};

export default App;
