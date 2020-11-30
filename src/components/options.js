import React from "react";

const options = props => {
  return (
    <div className="options my-4 flex items-center">
      <div className="search mr-4">
        <p className="by font-bold text-gray-800">Search By</p>
      </div>
      <div className="inline-block relative w-64">
        <select
          onChange={e => {
            props.setOptions(e.target.value);
            props.setPage(1);
            props.setLoading(true);
          }}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow"
        >
          <option disabled>Your Tag</option>
          <option>story</option>
          <option>comment</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default options;
