import React, { useState } from "react";
import conactImg from "../../images/contactNew.png";
import { useNavigate } from 'react-router-dom';
// style={{border: "2px solid red"}}

const Regiter = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;

    if (!name || !email || !password || !cpassword) {
      return alert( "Please fill the info properly");
    }

    if (password != cpassword) {
      return alert("Password is not matching");
    }

    const res = await fetch("/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password, cpassword, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    }); 

    if (res.status === 422) {
      return alert("User already register");
    }

    if (res.status === 500) {
      return alert("Something Wrong! Please try again.");
    }

    if (res.status === 201) {
      alert("Registration Successful!");

      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      });

      navigate('/login');
    }
  };

  return (
    <>
      <section>
        <div className="container mt-4 ">
          <div className="row p-3">
            <div className="col-lg-6 col-md-6 d-sm-block col-xxl-6  d-lg-flex d-md-flex align-items-center justify-content-center">
              <fieldset>
                <img className=" img-fluid" src={conactImg} alt="img" />
              </fieldset>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
              <h1 className=" text-center">Sign Up</h1>
              <hr className="w-25 mx-auto" />
              <form className="row g-3" onSubmit={addUser}>
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={user.name}
                    onChange={inputEvent}
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
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
                  <label htmlFor="phone" className="form-label">
                    Phone (Optional)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    value={user.phone}
                    onChange={inputEvent}
                    name="phone"
                    placeholder="Enter your mobile number"
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
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    value={user.cpassword}
                    onChange={inputEvent}
                    name="cpassword"
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Regiter;
