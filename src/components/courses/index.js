import React from "react";
import AddCourse from "./AddCourses";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { getCourses, getCoursesReset } from "../../redux/courses/actions";

class Courses extends React.Component {
  componentDidMount = () => {
    const { getCourses, courses } = this.props;
    if (courses.length === 0) {
      getCourses();
    }
  };

  componentWillUnmount = () => {
    const {getCoursesReset} = this.props
    getCoursesReset()
  }

  render() {
    const {
      getCoursesStatus: { isPending },
      courses
    } = this.props;
    return (
      <div>
        <h2>Courses</h2>
        <hr />
        <AddCourse />
        <br />
        <CourseList loading={isPending} items={courses} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { coursesList, getCoursesStatus } = state.courses;
  return {
    courses: coursesList,
    getCoursesStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: () => dispatch(getCourses()),
    getCoursesReset: () => dispatch(getCoursesReset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
