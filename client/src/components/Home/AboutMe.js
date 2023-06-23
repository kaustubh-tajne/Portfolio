import React from "react";
import clang from "../../images/clang.png";
import cppN from "../../images/cppN.png";
import { SiJavascript } from "react-icons/si";
import js from "../../images/js.png";
import jsN from "../../images/jsN.png";

const Languages = [
  {
    title: "C Language",
    logo: clang,
  },
  {
    title: "C++",
    logo: cppN,
  },
  {
    title: "JavaScript",
    logo: jsN,
  },
];

const SubTech = (props) => {
  const { info, ind } = props;
  return (
    <>
      <div
        key={ind}
        className="lang_box mb-3 d-flex align-items-center justify-content-around mt-3"
      >
        <div>
          <img className="lang_logo" src={info.logo} />
        </div>
        <h3 className="d-inline-block">{info.title}</h3>
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <>
      <section>
        <div className="container mt-5 mx-auto">
          <h1 className="text-center text-capitalize heading">About Me</h1>
          <hr className="w-25 mx-auto" />

          {/* <div className="intro m-3">
            <h3 className="text-start heading">Introduction</h3>

            <p>I am a </p>
          </div> */}

          <div>
            <div className="personal_info m-3 mt-4">
              <h3 className="text-start heading">Programming Languages</h3>

              <div className="d-flex justify-content-around flex-wrap mt-3">
                {Languages.map((ele, ind) => {
                  return <SubTech info={ele} ind={ind} />;
                })}
              </div>
            </div>
          </div>

          <div className="college m-3 mt-5">
            <h3 className="text-start heading mb-3">Education</h3>

            <div className="edu_grid">
              <div className="head_grid">Degree/Certification</div>
              <div className="head_grid">Institute/Board</div>
              <div className="head_grid">CGPA/Percentage</div>
              <div className="head_grid">Year</div>

              <div>B.E.</div>
              <div>YCCE, Nagpur</div>
              <div>7.74 (Current)</div>
              <div>2019 - Present</div>

              <div>HSC</div>
              <div>Maharastra State Board</div>
              <div>81.20%</div>
              <div>2019</div>

              <div>SSC</div>
              <div>Maharastra State Board</div>
              <div>90.20%</div>
              <div>2017</div>
            </div>
          </div>

          <div className=" m-3 mt-5">
            <h3 className="text-start heading mb-3">Key Courses Taken</h3>
            <div>
              <ul className="key_course">
                <li>Data Structures and Algorithms</li>
                <li>Object Oriented Programming</li>
                <li>Oprating System</li>
                <li>DBMS</li>
                <li>Computer Networks</li>
                <li>Design and Analysis of Algorithms</li>
              </ul>
            </div>
          </div>

          <div className=" m-3 mt-5">
            <h3 className="text-start heading mb-3">Contact Information</h3>
            <div className="info_contact">
              <span className="gmail_head">Gmail</span>
              <span> : kaustubhtajne12@gmail.com</span>
            </div>
            <div className="info_contact">
              <span className="gmail_head">City</span>
              <span> &nbsp;&nbsp; : Nagpur, Maharastra</span>
            </div>
            <div className="info_contact">
              <span className="gmail_head">Country</span>
              <span> : India</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
