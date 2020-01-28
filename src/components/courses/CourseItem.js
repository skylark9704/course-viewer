import React from "react";
import { Link } from "react-router-dom";
function CourseItem(props) {
  const { title, category, authorName, slug } = props.course;
  const route = `/course/${slug}`;
  return (
    <tr>
      <td>
        <button className="btn btn-light btn-small">Watch</button>
      </td>
      <td>
        <Link to={route}>{title}</Link>
      </td>
      <td>{authorName}</td>
      <td>{category}</td>
      <td><button className="btn btn-outline-danger">Delete</button></td>
    </tr>
  );
}

export default CourseItem
