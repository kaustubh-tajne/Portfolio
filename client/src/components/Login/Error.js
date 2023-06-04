import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="" style={{height: "63vh"}}>
        <h1 className="text-center mt-5">Error</h1>
        <div className="text-center">
          <NavLink to="/" role="button">
            <button className="btn buttonOff" type="button">
              Go to Home
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Error;
