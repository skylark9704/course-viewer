import React from "react";
import AddCourse from "./AddCourses";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { getCourses } from "../../redux/courses/actions";

class Courses extends React.Component {

  componentDidMount = () => {
    this.props.getCourses()
  }
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
        <AddCourse/>
        <br />
        <CourseList items={this.props.courses} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses.coursesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCourses: () => dispatch(getCourses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
