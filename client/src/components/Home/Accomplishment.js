import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";

const arr_achi = [
  {
    title: "5",
    sign: <GrFormAdd />,
    desc: "Personal Projects",
  },
  {
    title: "2",
    sign: <AiFillStar />,
    desc: "Rating on CodeChef",
  },
  {
    title: "120",
    sign: <GrFormAdd />,
    desc: "Proplems solved on LeetCode",
  },
];

const Accomplishment = () => {
  const [achievements, setAchievements] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("/api/box");
      const data = await res.json();
      console.log(data);
      setAchievements(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <section className="mb-5">
        <div className="container mt-5 mb-5">
          <h1 className="heading text-center text-capitalize">
            Personal Accomplishment{" "}
          </h1>
          <hr className="w-25 mx-auto" />
          <div className="d-flex justify-content-around flex-wrap">
            {achievements.map((ele, id) => {
              return (
                <div className="achieve_box" key={id}>
                  <h3 className="d-flex justify-content-start align-content-center">
                    <span>{ele.count}</span>
                    {ele.logo === "<GrFormAdd/>" ? (
                      <span className="m-0 p-0">
                        <GrFormAdd />
                      </span>
                    ) : (
                      <span className="m-0 p-0">
                        <AiFillStar />
                      </span>
                    )}
                  </h3>
                  <p>{ele.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accomplishment;
