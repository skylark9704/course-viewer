import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCourse } from "../../redux/courses/actions";
function CourseItem(props) {
  const {
    course: { id, title, category, authorName, slug },
    deleteCourseStatus
  } = props;

  const deleteCourse = id => {
    props.deleteCourse(id);
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
          onClick={() => deleteCourse(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

const mapStateToProps = state => {
  return {
    deleteCourseStatus: state.courses.deleteCourseStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCourse: id => dispatch(deleteCourse(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);
