import React, { createContext, useReducer } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Regiter";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Logout from "./components/Login/Logout";
import Error from "./components/Login/Error";
import Singlepage from "./components/Blog/Singlepage";
import Write from "./components/write/Write";
import reducer, { initialState } from "./reducer/UseReducer";
import { useState } from "react";

const UserContext = createContext();



const Routing = ({call}) => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/write" element={ call ? <Write /> : <Home/>} />
        <Route path="/blog/:postId" element={<Singlepage/>} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const stateLocal = localStorage.getItem('state');
  let call = false;
  
  const func = () => {
    if (stateLocal === 'truekaustubh') {
      call = true;
    }
  }
  
  func();

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
          <Navbar />
          <Routing call={call}/>
          <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
export { UserContext };
