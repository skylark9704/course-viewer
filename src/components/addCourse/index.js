import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCourse,
  getCourses,
  editCourse,
  editCourseReset,
  getCoursesReset
} from "../../redux/courses/actions";
import { Redirect } from "react-router-dom";
import CourseForm from "./CourseForm";
import Loading from "../common/Loading";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    const { courses, getCourses } = this.props;
    const { slug } = this.props.match.params;
    this.slug = slug;
    if (courses.length === 0 && this.slug !== undefined) {
      console.log("Getting Courses");
      getCourses();
    }
  }

  componentWillUnmount = () => {
    const { editCourseReset, getCoursesReset } = this.props;
    editCourseReset();
    getCoursesReset();
  };

  onSubmit = course => {
    console.log("Submitting")
    const { addCourse, editCourse } = this.props;
    if (course.id) {
      editCourse(course);
    } else {
      console.log("Adding Course")
      addCourse(course);
    }
  };

  render() {
    const {
      addCourseRequest,
      getCourseRequest,
      courses,
      editCourseStatus
    } = this.props;

    if(addCourseRequest.isFullfilled || editCourseStatus.isFullfilled){
      return <Redirect to='/courses' />
    }
    if (getCourseRequest.isPending) {
      return <Loading />;
    }

    if (this.slug) {

      let courseIndex = courses.findIndex(_course => {
        return _course.slug === this.slug;
      });

      if (courseIndex !== -1) {
        return (
          <CourseForm
            edit={true}
            courseData={courses[courseIndex]}
            onSubmit={this.onSubmit}
          />
        );
      }

      else{
        return <Redirect to='/not-found' />
      }
    }

    return <CourseForm disabled={addCourseRequest.isPending} onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => {
  const {
    addCourseRequest,
    getCoursesRequestStatus,
    coursesList,
    editCourseStatus
  } = state.courses;
  return {
    addCourseRequest,
    getCourseRequest: getCoursesRequestStatus,
    courses: coursesList,
    editCourseStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(addCourse(course)),
    editCourse: course => dispatch(editCourse(course)),
    getCourses: () => dispatch(getCourses()),
    editCourseReset: () => dispatch(editCourseReset()),
    getCoursesReset: () => dispatch(getCoursesReset())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
