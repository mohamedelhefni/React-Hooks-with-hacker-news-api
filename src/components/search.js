import React from "react";

const search = props => {
  return (
    <form
      onSubmit={e => {
        let newSearch = props.search.replace(/ /g, "+");
        e.preventDefault();
        props.setQuery(newSearch);
        console.log(newSearch);
        props.setLoading(true);
        props.setPage(1);
      }}
    >
      <input
        onChange={e => {
          props.setSearch(e.target.value);
        }}
        className="bg-white  rounded-full font-bold mx-1 focus:border-teal-500 text-gray-900 text-lg focus:outline-none focus:shadow-lg border-2 border-gray-300 rounded-lg py-2 px-5 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Your Search Topic ?  "
      />
    </form>
  );
};

export default search;
