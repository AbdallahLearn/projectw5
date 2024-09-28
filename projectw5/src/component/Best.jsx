import React from "react";

function Best(props) {
  return (
    <>
      <div className="card card-compact  w-96 rounded-none max-sm:mb-0 ">
        <figure>
          <img src={props.img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{props.title}</h2>
          <p className="text-gray-400">{props.desc}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </>
  );
}

export default Best;
