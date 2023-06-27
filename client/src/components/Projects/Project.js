import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Upload from "./Upload";
import CardProj from "./CardProj";
import Tabs from "./Tabs";
import AddProjects from "./AddProjects";
import BASE_URL from "../../url/BASE_URL";

const Project = () => {
  const [projectArr, setProjectArr] = useState([]);
  const [itProjectArr, setItProjectArr] = useState([]);
  const [show, setShow] = useState();
  
  const getProjects = async () => {
    try {
      const res = await fetch(`${BASE_URL}/project`);
      const data = await res.json();
      setProjectArr(data);
      setItProjectArr(data);
      
      if (res.status === 210) {
        setShow(true);
      }
      else if (res.status === 200) {
        setShow(false);
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-center mt-4 heading">Projects</h1>
          <hr className="w-25 mx-auto mb-3" />

          <Tabs projectArr={projectArr}/>

          <AddProjects showAdd = {show}/>
          
        </div>
      </section>
    </>
  );
};

export default Project;
