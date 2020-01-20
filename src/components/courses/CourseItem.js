import React from "react";

export default function CourseItem(props) {
  const { title } = props;
  console.log(props)

  return <li>{title}</li>;
}
