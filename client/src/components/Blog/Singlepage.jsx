import React from "react";
import Sidebar from "./Sidebar";
import natureImg from "../../images/dm2.jpeg";
import portfolio from "../../images/portfolio.jpg";
import profile from "../../images/text2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import hackerImg from '../../images/hacker.png';
import BASE_URL from "../../url/BASE_URL";

const Singlepage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  const id = location.pathname.split("/")[2];
  const [singlePost, setSinglePost] = useState({
    desc: "",
    photo: "",
    title: "",
    updatedAt: "",
    _id: "",
  });
  let showEditDelete = false;
  if (localStorage.getItem("state") === "truekaustubh") {
    showEditDelete = true;
  }

  const [titleU, setTitleU] = useState("");
  const [descU, setDescU] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const getSinglePost = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/posts/${id}`);
      const data = await res.json();

      // console.log(data);
      setSinglePost(data);
      setTitleU(data.title);
      setDescU(data.desc);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    const flag = window.confirm("Delete these post permanently");
    if (flag == false) {
      return;
    }
    try {
      await fetch(`/api/posts/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }; //;body: JSON.stringify({ data: image, writeInfo: writeInfo }),

  const handleUpdate = async () => {
    try {
      await fetch(`${BASE_URL}/api/posts/${_id}`, {
        method: "PUT",
        body: JSON.stringify({ title: titleU, desc: descU }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSinglePost();
  }, [id]);

  const { title, desc, updatedAt, photo, _id } = singlePost;
  return (
    <>
      <section>
        <div className="container main_blog">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12 col-xxl-8">
              <div className="single_img">
                <fieldset>
                  <img src={photo ? photo : portfolio} alt="img" />
                </fieldset>
              </div>

              <div className="d-flex flex-wrap align-items-center post_head">
                {updateMode ? (
                  <input
                    type="text"
                    value={titleU}
                    className="singlePostTitleInput"
                    onChange={(e) => setTitleU(e.target.value)}
                    autoFocus={true}
                  />
                ) : (
                  <>
                    <h2 className="text-center mt-2">{title}</h2>

                    {showEditDelete && (
                      <div>
                        <span className="singlePostEdit">
                          <FiEdit
                            className="singlePostIcon"
                            onClick={() => setUpdateMode(true)}
                          />
                          <RiDeleteBin6Line
                            className="singlePostIcon"
                            onClick={handleDelete}
                          />
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="profile_single d-flex justify-content-between align-items-center mt-3">
                <div className="d-flex  align-items-center">
                  <fieldset>
                    <img src={hackerImg} alt="img" />
                  </fieldset>

                  <h5 className="ms-3" style={{ color: "#d58814" }}>
                    {"Kaustubh"}
                  </h5>
                </div>

                <div style={{ color: "rgb(102 100 100)", fontStyle: "italic" }}>
                  <p>{new Date(updatedAt).toDateString()}</p>
                </div>
              </div>

              <div className="mt-4 post_desc">
                {updateMode ? (
                  <textarea
                    className="singlePostDescInput"
                    placeholder="Type Here"
                    value={descU}
                    onChange={(e) => setDescU(e.target.value)}
                  />
                ) : (
                  <p>{desc}</p>
                )}
              </div>

              {updateMode && (
                <div className="singlePostButton">
                  <button type="button" onClick={handleUpdate}>
                    Update
                  </button>
                </div>
              )}
            </div>

            <div className="col-lg-4 col-md-4 col-12 col-xxl-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Singlepage;
