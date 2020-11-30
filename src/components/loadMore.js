import React from "react";

const loadMore = props => {
  return (
    <div className="loadMore text-center my-3">
      <button
        onClick={props.loadMore}
        className="btn bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded  "
      >
        {props.isLoadingMore ? "loading..." : "Load More"}
      </button>
    </div>
  );
};

export default loadMore;
