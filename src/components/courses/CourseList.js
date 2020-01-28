import React from "react";
import CourseItem from "./CourseItem";
import Loading from "../common/Loading";
function CourseList(props) {
  const { items, loading } = props;

  if (loading) {
    return <Loading />;
  }
  return (
    <table
      className="table
    "
    >
      <thead>
        <tr>
          <th></th>
          <th>
            <b>Title</b>
          </th>
          <th>
            <b>Author</b>
          </th>
          <th>
            <b>Category</b>
          </th>
        </tr>
      </thead>

      <tbody>
        {items &&
          items.map((course, index) => (
            <CourseItem course={course} key={index} />
          ))}
      </tbody>
    </table>
  );
}
export default CourseList;
