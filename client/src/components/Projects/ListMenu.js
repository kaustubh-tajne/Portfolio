import React from "react";

const ListMenu = ({ FilterProj, tagsArr }) => {
  //   console.log("hello tab1");

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap">
        {tagsArr.map((ele, ind) => {
          return (
            <button
              key={ind}
              className="btn btn-info m-1"
              onClick={() => FilterProj(ele)}
              style={{ textTransform: "capitalize" }}
            >
              {ele}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ListMenu;
