import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { ADD, GET, EDIT } from "../../sagas/courses/actions";
import CourseForm from "./CourseForm";
import Loading from "../common/Loading";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    const { courses, getCourses } = this.props;
    const { slug } = this.props.match.params;
    this.slug = slug;
    if (courses.length === 0 && this.slug !== undefined) {
      console.log("Slug Found");
      getCourses();
    }
  }

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
      editCourseStatus,
      courses
    } = this.props;

    if (addCourseStatus.isFullfilled || editCourseStatus.isFullfilled) {
      return <Redirect to="/courses" />;
    }
    if (getCoursesStatus.isPending) {
      return <Loading />;
    }

    if (this.slug && courses.length !== 0) {
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
    editCourseStatus,
    courses: coursesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(ADD.REQUEST(course)),
    editCourse: course => dispatch(EDIT.REQUEST(course)),
    getCourses: () => dispatch(GET.REQUEST())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
