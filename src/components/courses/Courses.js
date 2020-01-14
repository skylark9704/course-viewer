import React, { Component } from "react";
import AddCourse from "./AddCourses";
import CourseList from "./CourseList";

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: ["React", "Redux"]
    };
  }

  addCourse = value => {
    if (value) {
      const courses = this.state.courses.slice();
      courses.push(value);
      this.setState({ courses });
    }
  };

  render() {
    const { courses } = this.state;

    return (
      <div>
        <h2>Courses</h2>
        <hr />
        <CourseList courses={courses} />
        <br />
        <AddCourse add={this.addCourse} />
      </div>
    );
  }
}
