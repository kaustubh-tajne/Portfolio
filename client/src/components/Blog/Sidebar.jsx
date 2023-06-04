import React from "react";
import person from "../../images/test1.png";
import hackerImg from '../../images/hacker.png';
import hackerImg2 from '../../images/hacker2.png';
import coderImg from '../../images/code.jpg';
import "./blog.css";
// import { FaFacebookSquare } from "react-icons/fa";
// import { GrTwitter } from "react-icons/gr";
// import { BsPinterest } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <section className="sideBar">
        <div>
          <div>
            <h2 className="text-center sidebarTitle">About Me</h2>
            <hr className="w-50 mx-auto" />
          </div>

          <div className="person_img text-center mb-3">
            <fieldset>
              <img src={hackerImg2} alt="img" />
            </fieldset>
          </div>

          <div>
            <p style={{textAlign:"justify"}} className="mt-3">
              Hello everyone, I am{" "}
              <span className="my_nameSideBar">Kaustubh Tajne</span>,   currently a
              computer science undergraduate B.E. student. I am a{" "}
              <span className="">Full Stack Web Developer</span>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-center mt-5 sidebarTitle">Categories</h2>
          <hr className="w-50 mx-auto" />

          <div>
            <ul className="sidebarListItem">
              <li>Technology</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>C++</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>ReactJs</li>
              <li>HBS</li>
              <li>NodeJs</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MySql</li>
              <li>AWS</li>
              <li>Cloud</li>
              <li>BLockchain</li>
              <li>NFTs</li>
            </ul>
          </div>
        </div>

        <div className="sidebarItem mt-5 mb-5">
          <h3 className="sidebarTitle">Socila Media</h3>
          <hr className="w-50 mx-auto" />
          <div className="sidebarSocial">
            <a
              href="https://www.linkedin.com/in/kaustubh-tajne-5816481bb/"
              target="_blank"
              className="sidebarIcon"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/kaustubh-tajne"
              className="sidebarIcon"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.facebook.com/kaustubh.tajne.98/"
              target="_blank"
              className="sidebarIcon"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/kaustubh_tajne/"
              target="_blank"
              className="sidebarIcon"
            >
              <BsInstagram />
            </a>
            {/* <FaFacebookSquare className="sidebarIcon" />
            <GrTwitter className="sidebarIcon" />
            <BsPinterest className="sidebarIcon" />
            <BsInstagram className="sidebarIcon" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
