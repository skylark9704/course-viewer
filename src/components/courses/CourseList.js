import React from "react";
import CourseItem from "./CourseItem";

function CourseList(props) {
  const { items } = props;
  return (
    <ul>
      {items && items.map((elem, index) => (
        <CourseItem name={elem} key={index} />
      ))}
    </ul>
  );
}

export default CourseList
