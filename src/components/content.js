import React from "react";
import Loading from "./loading";
import Card from "./card";

const content = props => {
  return (
    <div>
      {props.loading ? (
        <div className="text-center my-3">
          <Loading />
        </div>
      ) : (
        props.results.map((result, index) => (
          <Card
            key={index.toString()}
            title={result.title ? result.title : result.story_title}
            url={result.url}
            points={result.points}
            comments={result.num_comments}
            date={result.created_at}
            author={result.author}
            tags={result._tags}
            text={
              result.story_text ? result.story_text.substring(0, 200) : null
            }
          />
        ))
      )}
    </div>
  );
};

export default content;
