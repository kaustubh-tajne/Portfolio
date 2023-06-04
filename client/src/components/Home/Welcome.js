import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import portfolioImg from "../../images/portfolio.jpg";

const Welcome = () => {
  return (
    <>
      <section>
        <div className="container main_wel mb-5">
          <div className="row  main_fonts">
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex flex-column justify-content-center align-items-start dem py-3">
              <h1>Welcome to my personal portfolio</h1>
              <p>
                Hello everyone, I am <span className="my_name">Kaustubh Tajne</span> , currently a computer
                science undergraduate B.E. student. I am a <span className="my_name">Full Stack Web Developer</span>. I am a self-disciplined,
                versatile learner. I am very passionate about problem solving
                through programming, looking for a great opportunity.
              </p>
              <div>
                <NavLink className="" to="/project" role="button">
                  <button type="button" className="btn btn-info">
                    Projects
                  </button>
                </NavLink>
                <NavLink className="" to="/blog" role="button">
                  <button type="button" className="btn btn-warning ms-2">
                    Blog
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 portfolio mt-2">
              <fieldset>
                <img src={portfolioImg} className="img-fluid" alt="img" />
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
