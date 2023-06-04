import React from "react";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";

const tech = [
  {
    title: "Web Tech",
    tags: ["HTML5", "CSS3",  "handlebars", "SASS"],
    logo: <AiOutlineHtml5 />,
  },
  {
    title: "Front-End",
    tags: ["ReactJs"],
    logo: <DiReact />,
  },
  {
    title: "Back-End",
    tags: ["NodeJs", "Express"],
    logo: <DiNodejsSmall />,
  },
  {
    title: "Database",
    tags: ["MongoDB", "MySQL"],
    logo: <DiDatabase />,
  },
  // {
  //   title: "Cloud",
  //   tags: ["AWS"],
  //   logo: <BsFillCloudCheckFill />,
  // },
  {
    title: "VCS",
    tags: ["Git", "GitHub"],
    logo: <FaGitAlt />,
  },
  {
    title: "OS",
    tags: ["Windows", "Ubuntu"],
    logo: <FaWindows />,
  },
];

const SubTech = (props) => {
  const { info, ind } = props;
  return (
    <>
      <div key={ind} className="tech_box mb-3">
        <h2>{info.logo}</h2>
        <h3>{info.title}</h3>
        <p className="tect_para">
          {info.tags.map((ele, indx) => {
            return (
              <>
                <span className="mx-1 fw-bold span_col" key={indx}>
                  <span>&#8226;</span>&nbsp;
                  <span>{ele}</span> 
                </span>
              </>
            );
          })}
        </p>
      </div>
    </>
  );
};

const Technologies = () => {
  return (
    <>
      <section>
        <div className="container mt-5 mb-3">
          <h1 className="heading text-center">Technologies</h1>
          <hr className=" w-25 mx-auto font-weight-bold" />
          <div className="d-flex justify-content-around flex-wrap">
            {tech.map((ele, ind) => {
              return <SubTech info={ele} ind={ind} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
