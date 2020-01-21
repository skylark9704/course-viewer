import React, { Component } from "react";
import { connect } from "react-redux";
import AuthorList from "./AuthorList";
import InputComponent from "../common/Input";
import { addCourse } from "../../redux/courses/actions";
import { Redirect } from "react-router-dom";

class AddCourse extends Component {
  getAuthorSelection = value => {
    console.log(value);
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, author, category } = e.target;
    const course = {
      title: title.value,
      authorId: Number(author.value),
      category: category.value
    };
    console.log("Course :", course);
    this.props.addCourse(course);
  };

  render() {
    if (this.props.addCourseRequest) {
      const { isFullfilled } = this.props.addCourseRequest;
      if (isFullfilled) {
        return <Redirect to="/courses" />;
      }
    }

    return (
      <div>
        <h2>Add Course {this.props.isPending ? "True" : "False"}</h2>
        <hr />
        <form onSubmit={this.onSubmit}>
          <fieldset disabled={this.props.isPending}>
            <InputComponent
              label="Title"
              type="text"
              name="title"
              placeholder="Enter Course Title"
              required={true}
            />
            <AuthorList required={true} onSelect={this.getAuthorSelection} />
            {/* onSelect Prop is Optional [Use-case: Captures onChange event of component as soon as its fired] */}
            <InputComponent
              label="Category"
              type="text"
              name="category"
              placeholder="Enter Course Category"
              required={true}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addCourseRequest: state.courses.addCourseRequest
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(addCourse(course))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
