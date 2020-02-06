import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { DELETE } from "../../sagas/courses/actions";
function CourseItem(props) {
  const {
    course: { id, title, category, authorName, slug },
    deleteCourseStatus,
    deleteCourse
  } = props;

  const courseDelete = id => {
    deleteCourse(id);
  };

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
      <td>
        <button
          disabled={deleteCourseStatus.isPending}
          className="btn btn-outline-danger"
          onClick={() => courseDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

const mapStateToProps = state => {
  const { deleteCourseStatus } = state.courses;
  return {
    deleteCourseStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: id => dispatch(DELETE.REQUEST(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);
