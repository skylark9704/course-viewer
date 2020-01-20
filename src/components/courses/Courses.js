import React from "react";
import AddCourse from "./AddCourses";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { addCourse } from "../../redux/actions";

class Courses extends React.Component {
  add = course => {
    if (course) {
      this.props.addCourse(course);
    }
  };

  render() {
    return (
      <div>
        <h2>Courses</h2>
        <hr />
        <CourseList items={this.props.courses} />
        <br />
        <AddCourse add={this.add} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(addCourse(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
