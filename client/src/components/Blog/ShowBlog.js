import React from "react";
import { NavLink } from "react-router-dom";
import port from "../../images/portfolio.jpg";

const ShowBlog = ({ post }) => {
  const { title, updatedAt, photo, desc, _id } = post;
  // console.log(post);
  return (
    <>
      <div className="col-lg-6 col-md-6 col-12 col-xxl-6 mb-5">
        <div className="blog_main">
          <div className="div_img">
            {/* <fieldset> */}
              <img src={photo ? photo : port} alt="img" />
            {/* </fieldset> */}
          </div>

          <NavLink to={`/blog/${_id}`} className="link">
            <h3 className="text-center mt-2">{title}</h3>
          </NavLink>

          <p className="text-center">{new Date(updatedAt).toDateString()}</p>

          <NavLink to={`/blog/${_id}`} className="link">
            <p className="postDesc">{desc}</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ShowBlog;
