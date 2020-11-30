import React from "react";

const card = props => {
  return (
    <div className="card mx-2 hover:shadow-lg border  bg-white rounded-lg shadow-md p-4 my-5 ">
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="title text-gray-800 hover:text-teal-500 text-2xl font-bold my-3"
      >
        {props.title}
      </a>

      <p
        className="text p-2 my-2 text-gray-700 text-base"
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></p>

      <div className="flex flex-wrap mt-4 justify-between ">
        <div className="ad flex items-center flex-wrap">
          <div className="author-name mx-2"> {props.author} </div>
          <div className="date mx-2">
            <span className="text-teal-500 font-bold">
              {new Date(props.date).toDateString()}
            </span>{" "}
          </div>
          <div className="tags flex flex-wrap items-center my-2 justify-between">
            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
              #{props.tags[0]}
            </div>
          </div>
        </div>
        <div className="pc flex items-center">
          <div className="points mx-3">
            <span className="text-gray-500 font-bold"> {props.points} </span>{" "}
            <svg
              className="svg-icon stroke-current text-gray-700 inline-block h-8 w-8"
              viewBox="0 0 20 20"
            >
              <path
                fill="none"
                d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"
              ></path>
            </svg>
          </div>
          <div className="comments mx-3">
            <span className="text-gray-700 font-bold"> {props.comments} </span>{" "}
            <svg
              className="svg-icon stroke-current text-gray-700 inline-block h-8 w-8"
              viewBox="0 0 20 20"
            >
              <path d="M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
