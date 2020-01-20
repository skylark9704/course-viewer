import React from "react";
import CourseItem from "./CourseItem";

function CourseList(props) {
  const { items } = props;
  return (
    <ul>
      {items && items.map((elem, index) => (
        <CourseItem title={elem.title} key={index} />
      ))}
    </ul>
  );
}

export default CourseList
