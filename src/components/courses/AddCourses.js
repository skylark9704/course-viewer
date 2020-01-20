import React from "react";
function AddCourse(props) {
  const {add} = props
  let course = "";

  const handleChange = e => {
    course = e.target.value;
  };

  const addCourse = e => {
    add(course);
    course = "";
    e.target.reset();
    e.preventDefault();
  };

  return (
    <div>
      <h4>Add Course</h4>
      <hr />
      <form onSubmit={e => addCourse(e)}>
        <input type="text" onChange={e => handleChange(e)} />
        <button type="submit" className="btn btn-primary btn-sm">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
