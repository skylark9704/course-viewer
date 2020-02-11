import React from "react";
import AddCourse from "./AddCourses";
import CourseList from "./CourseList";
import { connect } from "react-redux";
import { GET } from "../../sagas/courses/actions";

class Courses extends React.Component {
  componentDidMount = () => {
    const { getCourses, courses } = this.props;
    if (courses.length === 0) {
      getCourses();
    }
  };

  render() {
    const {
      getCoursesStatus: { isPending, isCancelled },
      courses
    } = this.props;
    return (
      <div>
        <h2>Courses</h2>
        <hr />
        <AddCourse />
        <br />
        {!isCancelled ? <CourseList loading={isPending} items={courses} /> : <div>Please check with the API</div>}
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
    getCourses: () => dispatch(GET.REQUEST()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
