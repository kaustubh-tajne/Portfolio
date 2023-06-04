import React, { useEffect, useState } from "react";
import CardProj from "./CardProj";
import ListMenu from "./ListMenu";


const Tabs = ({ projectArr }) => {
  const [itProjectArr, setItProjectArr] = useState([]);
  const [tagsArr, setTagsArr] = useState([]);

  const allTags = projectArr.map((ele) => {
    return ele.tags;
  })
  // console.log(allTags);

  const filterArr = [];
  for (let i = 0; i < allTags.length; i++) {
    const element = allTags[i].split(" ");
    for(let j = 0; j < element.length; j++) {
      filterArr.push(element[j]);
    }
  }
  // console.log(filterArr);

  const filterTags = ['all',...new Set(filterArr)];
  // console.log(filterTags);

  
  // console.log(tagsArr);

  const render = () => {
    setTagsArr(filterTags);
    setItProjectArr(projectArr);
  }

  useEffect(() => {
    render();
  },[projectArr])


  const FilterProj = (tagItem) => {
    const updateArr = projectArr.filter((currEle) => {
      // console.log(currEle.tags);
      const str = currEle.tags.toLowerCase();
      tagItem = tagItem.toLowerCase();
      return tagItem === "all" || str.split(" ").includes(tagItem);
    });
  
    // console.log(updateArr);
    setItProjectArr(updateArr);
  };

  return (
    <>
      <ListMenu FilterProj={FilterProj} tagsArr={tagsArr}/>
      <div className="container" style={{ margin: "1rem auto" }}>
        <div className="row g-3 mx-auto">
          {itProjectArr.map((ele, ind) => {
            return (
                <CardProj info={ele} ind={ind} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tabs;
