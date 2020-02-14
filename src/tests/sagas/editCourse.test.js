import { editCourse } from "../../sagas/courses/workers";
import * as assert from "assert";
import { put, call } from "redux-saga/effects";
import { EDIT } from "../../sagas/courses/actions";
import Axios from "axios";

describe("Testing getCourse Saga", () => {
  test("should edit course", () => {
    const course = { title: "title", category: "category", authorId: 2, id: 2 };
    let gen = editCourse(EDIT.REQUEST(course));

    assert.deepEqual(
      gen.next().value,
      put(EDIT.PENDING()),
      "should return object"
    );

    assert.deepEqual(
      gen.next().value,
      call(Axios.put, "http://localhost:3001/courses/2", course),
      "should call api"
    );

    assert.deepEqual(
      gen.next().value,
      put(EDIT.SUCCESS({})),
      "should retrieve courses"
    );
  });
});
