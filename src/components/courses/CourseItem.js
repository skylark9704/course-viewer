import React from "react";
import {Link} from 'react-router-dom'
export default function CourseItem(props) {
  const { title, category, authorName, slug } = props.course;
  console.log(props)
  const route = `/course/${slug}`
  return (
    <tr>
      <td>
        <button className="btn btn-light btn-small">Watch</button>
      </td>
      <td><Link to={route}>{title}</Link></td>
      <td>{authorName}</td>
      <td>{category}</td>
    </tr>
  );
}