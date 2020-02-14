import * as assert from "assert";
import { put, call } from "redux-saga/effects";
import { GET } from "../../sagas/authors/actions";
import { getAuthors } from "../../sagas/authors/workers";
import Axios from 'axios'

describe("Testing getCourse Saga", () => {
  test("should return authors", () => {
    let gen = getAuthors();

    assert.deepEqual(
      gen.next().value,
      put(GET.PENDING()),
      "should return object"
    );

    assert.deepEqual(
      gen.next().value,
      call(Axios.get, "http://localhost:3001/authors"),
      "should call api"
    );

    assert.notDeepStrictEqual(
      gen.next().value,
      put(GET.SUCCESS({})),
      "should retrieve authors"
    );
  });
});
