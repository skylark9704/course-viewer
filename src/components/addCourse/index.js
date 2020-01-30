import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  addCourse,
  getCourses,
  editCourse,
  editCourseReset,
  getCoursesReset,
  addCourseReset
} from "../../redux/courses/actions";
import CourseForm from "./CourseForm";
import Loading from "../common/Loading";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    const { courses, getCourses } = this.props;
    const { slug } = this.props.match.params;
    this.slug = slug;
    if (courses.length === 0 && this.slug !== undefined) {
      getCourses();
    }
  }

  componentWillUnmount = () => {
    const { editCourseReset, getCoursesReset, addCourseReset } = this.props;
    editCourseReset();
    getCoursesReset();
    addCourseReset();
  };

  onSubmit = course => {
    const { addCourse, editCourse } = this.props;
    if (course.id) {
      editCourse(course);
    } else {
      addCourse(course);
    }
  };

  render() {
    const {
      addCourseStatus,
      getCoursesStatus,
      courses,
      editCourseStatus
    } = this.props;

    if (addCourseStatus.isFullfilled || editCourseStatus.isFullfilled) {
      return <Redirect to="/courses" />;
    }
    if (getCoursesStatus.isPending) {
      return <Loading />;
    }

    if (this.slug) {
      let courseIndex = courses.findIndex(course => {
        return course.slug === this.slug;
      });

      if (courseIndex !== -1) {
        return (
          <CourseForm
            edit={true}
            courseData={courses[courseIndex]}
            onSubmit={this.onSubmit}
          />
        );
      } else {
        return <Redirect to="/not-found" />;
      }
    }

    return (
      <CourseForm
        disabled={addCourseStatus.isPending || editCourseStatus.isPending}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const {
    addCourseStatus,
    getCoursesStatus,
    coursesList,
    editCourseStatus
  } = state.courses;
  return {
    addCourseStatus,
    getCoursesStatus,
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
    getCoursesReset: () => dispatch(getCoursesReset()),
    addCourseReset: () => dispatch(addCourseReset())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
