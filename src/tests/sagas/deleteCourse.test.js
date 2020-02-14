import { deleteCourse } from "../../sagas/courses/workers";
import * as assert from "assert";
import { put, call } from "redux-saga/effects";
import { DELETE } from "../../sagas/courses/actions";
import Axios from "axios";

describe("Testing getCourse Saga", () => {
  test("should delete course", () => {
    const courseId = 2;
    let gen = deleteCourse(DELETE.REQUEST(courseId));

    assert.deepEqual(
      gen.next().value,
      put(DELETE.PENDING()),
      "should return object"
    );

    assert.deepEqual(
      gen.next().value,
      call(Axios.delete, "http://localhost:3001/courses/2"),
      "should call api"
    );

    assert.deepEqual(
      gen.next().value,
      put(DELETE.SUCCESS({})),
      "should retrieve courses"
    );
  });
});
