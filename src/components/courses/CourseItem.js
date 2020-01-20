import React from "react";
export default function CourseItem(props) {
  const { title, authorId, category } = props;
  console.log(props);
  return (
    <tr>
      <td>
        <button className="btn btn-light btn-small">Watch</button>
      </td>
      <td>{title}</td>
      <td>{authorId}</td>
      <td>{category}</td>
    </tr>
  );
}