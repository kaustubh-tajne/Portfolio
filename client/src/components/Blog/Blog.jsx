import React, { useState } from "react";
import "./blog.css";
import port from "../../images/portfolio.jpg";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import ShowBlog from "./ShowBlog";
import { useEffect } from "react";
import BASE_URL from "../../url/BASE_URL";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/posts/`);
      const data = await res.json();

      // console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <section>
        <div className="container main_blog">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12 col-xxl-8">
              <div className="row">
                {posts.map((post) => {
                  return <ShowBlog post={post} />;
                })}
              </div>
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

export default Blog;
