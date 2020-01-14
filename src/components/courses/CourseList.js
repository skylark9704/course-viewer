import React from "react";
import CourseItem from "./CourseItem";

export default function CourseList(props) {
  const { courses } = props;

  return (
    <ul>
      {courses.map((elem, index) => (
        <CourseItem name={elem} key={index} />
      ))}
    </ul>
  );
}
