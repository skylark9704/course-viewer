import React from "react";
import CourseItem from "./CourseItem";
function CourseList(props) {
  const { items } = props;
  return (
    <table className="table
    ">
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
          items.map((elem, index) => (
            <CourseItem
              course = {elem}
              key={index}
            />
          ))}
      </tbody>
    </table>
  );
}
export default CourseList;
