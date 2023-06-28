import React, { useContext, useState } from "react";
import conactImg from "../../images/contactNew.png";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import BASE_URL from "../../url/BASE_URL";

const Login = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext);
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (!email || !password) {
      return alert("Please fill the info properly");
    }

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 422) {
        return alert("User does not exits");
      }

      if (res.status === 401) {
        return alert("Password is not matching");
      }

      if (res.status === 200) {
        // dispatch({type: "USER", payload: true});
        dispatch({type: "USER", payload: true});

        if (email === 'kaustubhtajne12@gmail.com') {
          localStorage.setItem("state","truekaustubh");
        }
        else {
          localStorage.setItem("state","true");
        }
        alert("Login Successful");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      // alert('Something wrong');
    }
  };

  return (
    <>
      <section>
        <div className="container mt-5 mb-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-sm-block col-xxl-6  d-lg-flex d-md-flex align-items-center justify-content-center">
              <fieldset>
                <img className=" img-fluid" src={conactImg} alt="img" />
              </fieldset>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
              <h1 className=" text-center">Login</h1>
              <hr className="w-25 mx-auto" />
              <form className="row g-3" onSubmit={loginUser}>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    onChange={inputEvent}
                    name="email"
                    placeholder="Enter your emial"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={user.password}
                    onChange={inputEvent}
                    name="password"
                    placeholder="Enter your Password"
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="" style={{height:"10px"}}>

      </div>
    </>
  );
};

export default Login;
