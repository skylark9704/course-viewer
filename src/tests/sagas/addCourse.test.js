import { addCourse } from "../../sagas/courses/workers";
import * as assert from "assert";
import { put, call } from "redux-saga/effects";
import { ADD } from "../../sagas/courses/actions";
import Axios from "axios";

describe("Testing getCourse Saga", () => {
  test("should add course", () => {
    const course = { title: "title", category: "category", authorId: 2 };
    let gen = addCourse(ADD.REQUEST(course));

    assert.deepEqual(
      gen.next().value,
      put(ADD.PENDING()),
      "should return object"
    );

    assert.deepEqual(
      gen.next().value,
      call(Axios.post, "http://localhost:3001/courses/", course),
      "should call api"
    );

    assert.deepEqual(
      gen.next().value,
      put(ADD.SUCCESS({})),
      "should retrieve courses"
    );

    assert.deepEqual(gen.next().value, put(ADD.RESET()), "should reset");
  });
});
