import React from "react";
import InputComponent from "../common/Input";
import AuthorList from "./AuthorList";

function CourseForm(props) {
  const { edit = false, courseData, onSubmit, disabled } = props;
  const onFormSubmit = e => {
    e.preventDefault();

    const { title, author, category } = e.target;
    const course = {
      title: title.value,
      authorId: Number(author.value),
      category: category.value
    };

    switch (edit) {
      case true: {
        let editCourse = Object.assign(courseData, course);
        onSubmit(editCourse);
        break;
      }

      case false: {
        onSubmit(course);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <div>
      <h3>{edit ? 'Edit Course' : 'Add Course'}</h3>
      <hr />
      <form onSubmit={e => onFormSubmit(e)}>
        <fieldset disabled={disabled}>
          <InputComponent
            label="Title"
            type="text"
            name="title"
            placeholder="Enter Course Title"
            required={true}
            value={courseData && courseData.title}
          />
          <AuthorList
            value={courseData && courseData.authorId}
            required={true}
          />
          {/* onSelect Prop is Optional [Use-case: Captures onChange event of component as soon as its fired] */}
          <InputComponent
            label="Category"
            type="text"
            name="category"
            placeholder="Enter Course Category"
            required={true}
            value={courseData && courseData.category}
          />
          <button type="submit" className="btn btn-primary">
            {edit ? "Edit" : "Submit"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CourseForm;
