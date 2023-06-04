import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const AddProjects = ({showAdd}) => {
  const [fileInput, setFileInput] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [user, setUser] = useState({
    title: "",
    description: "",
    tags: "",
    visit: "",
    code:""
  });

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInput(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  }; // no change here 

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const { title, description, tags, visit, code } = user;
    if (!selectedFile || !title || !description || !tags || !visit || !code) {
      return alert("Please fill all fields");
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.log("error");
    };
  };

  const uploadImage = async (image) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: image, user: user }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFileInput("");
      setPreviewSource("");
      setUser({
        title: "",
        description: "",
        tags: "",
        visit: "",
        code: ""
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // console.log(showAdd);

  return (
    <>
      {showAdd ? (
        <p>
          <NavLink
            className="btn btn-primary"
            data-bs-toggle="collapse"
            to="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Add Project
          </NavLink>
        </p>
      ) : null}

      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
          <div
            className="collapse multi-collapse"
            id="multiCollapseExample1"
            name=""
          >
            <div className="card card-body">
              <form onSubmit={handleSubmitFile}>
                <div className="row mb-3">
                  <label htmlFor="title" className="col-sm-2 col-form-label">
                    Title
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={user.title}
                      onChange={handleUser}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="description"
                    className="col-sm-2 col-form-label"
                  >
                    Info
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={user.description}
                      onChange={handleUser}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="tags" className="col-sm-2 col-form-label">
                    Tags
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="tags"
                      name="tags"
                      value={user.tags}
                      onChange={handleUser}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="visit" className="col-sm-2 col-form-label">
                    Visit
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="visit"
                      name="visit"
                      value={user.visit}
                      onChange={handleUser}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="code" className="col-sm-2 col-form-label">
                    Code
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="code"
                      name="code"
                      value={user.code}
                      onChange={handleUser}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="formFileSm" className="form-label">
                    Select Image
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="formFileSm"
                    type="file"
                    onChange={handleFileInput}
                    value={fileInput}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 col-xxl-4 order-1">
          {previewSource && (
            <img src={previewSource} alt="image" style={{ height: "200px" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default AddProjects;
