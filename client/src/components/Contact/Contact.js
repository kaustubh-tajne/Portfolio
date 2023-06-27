import React, { useEffect, useState } from "react";
import contact from "../../images/contact.png";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../url/BASE_URL";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [show, setShow] = useState();
  const navigate = useNavigate();

  const getContactData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/contact`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();

      if (res.status === 200) {
        setShow(true);
        setUser({
          ...data,
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      } else {
        // console.log(data);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      alert("Something wrong! Please try again!");
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
  };

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = user;

    if (!name || !email || !message) {
      return alert("Please fill the info properly");
    }

    try {
      const res = await fetch(`${BASE_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.status === 201) {
        alert("Message Sent");
        setUser({ ...user, message: "" });
      }

      if (res.status === 500) {
        alert("Something wrong!");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <>
      <section>
        <div className="container mt-4">
          <div
            className="row p-3"
            style={{
              border: "",
              minHeight: "70vh",
              background: "rgb(239 237 237 / 96%)",
              borderRadius: "1rem",
            }}
          >
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Lets Talk!</h1>
              <fieldset>
                <img
                  src={contact}
                  className="img-fluid"
                  alt="img"
                  style={{ width: "100px" }}
                />
              </fieldset>
              <h3>Feel free to ask</h3>
              <p className="mt-2">
                If you have any suggestions, please let me know. Your
                suggestions are highly appreciated. I appreciate your time and
                try hard to reply to every single message posted here! Keep
                dropping your priceless opinions.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-center">
              <form className="row g-3 form_contact" onSubmit={addUser}>
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
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    value={user.message}
                    onChange={inputEvent}
                  ></textarea>
                </div>

                <div className="col-12">
                  {show ? (
                    <button
                      type="submit"
                      onClick={contactForm}
                      className="btn btn-primary"
                    >
                      Send Message
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={navigateToLogin}
                      className="btn btn-danger"
                    >
                      Please Login to send message
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
