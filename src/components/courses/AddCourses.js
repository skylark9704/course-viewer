import React from "react";
import { Link } from "react-router-dom";
function AddCourse() {
  return (
    <div>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
    </div>
  );
}

export default AddCourse;
