import { getCourses, getAuthorsFromState } from "../../sagas/courses/workers";
import * as assert from "assert";
import { put, call, select } from "redux-saga/effects";
import { GET } from "../../sagas/courses/actions";
import { getAuthors } from "../../sagas/authors/workers";
import Axios from "axios";

describe("Testing getCourse Saga", () => {
  test("should return courses", () => {
    let gen = getCourses();

    assert.deepEqual(
      gen.next().value,
      put(GET.PENDING()),
      "should return object"
    );

    assert.deepEqual(
      gen.next().value,
      call(Axios.get, "http://localhost:3001/courses"),
      "should call api"
    );

    assert.deepEqual(
      gen.next().value,
      call(getAuthors),
      "should call authors api"
    );

    assert.deepEqual(
      gen.next().value,
      select(getAuthorsFromState),
      "should get authors from state"
    );

    assert.notDeepStrictEqual(
      gen.next().value,
      put(GET.SUCCESS({})),
      "should retrieve courses"
    );
  });
});
