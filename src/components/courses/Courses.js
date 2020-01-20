import React from "react";
import AddCourse from "./AddCourses";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { addCourse, getCourses } from "../../redux/actions";

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
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(addCourse(course)),
    getCourses: () => dispatch(getCourses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
