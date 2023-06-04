import React from "react";
import "./proj.css";

const CardProj = (props) => {
  const { image, title, description, tags, visit } = props.info;
  const ind = props.ind;
  const sub_tags = tags.split(" ");
  // console.log(sub_tags);
  // console.log(ind);

  return (
    <div
      key={ind}
      className=" mx-auto col-lg-4 col-md-4 col-12 col-xxl-4 "
      style={{}}
    >
      <div className="card" style={{ width: "auto", minHeight: "34rem" }}>
        <fieldset>
          <img
            src={image}
            className="card-img-top img-fluid"
            alt="img"
            style={{ height: "12rem" }}
          />
        </fieldset>

        <div className="card-body d-block-flex flex-column justify-content-between align-items-between text-center">
          <h5 className="card-title title_main">{title}</h5>
          <hr className="main_line" />

          <p className="card-text description">{description}</p>

          <div className="card-text mb-3">
            <p className="stack">Stack</p>
            <p className="card-text tags mt-3 tags_div">{tags}</p>
          </div>

          <div className="d-flex justify-content-around">
            <a href={visit} target="_blank" className="btn visit-btn bor">
              Visit
            </a>

            <a href={visit} target="_blank" className="btn visit-btn bor">
              Code
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardProj;
