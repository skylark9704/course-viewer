import React from "react";
import CourseForm from "../../components/addCourse/CourseForm";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { within, render } from "@testing-library/react";

const component = (
  <Provider store={store}>
    <CourseForm />
  </Provider>
);


describe("Testing CourseForm Component", () => {
  it("should render", () => {
    const tree = render(component);
    expect(tree.firstChild).toMatchSnapshot();
  });

  test("should have form ", () => {
    const { getByTestId } = render(component);
    const courseForm = getByTestId("course-form");
    const form = within(courseForm).getAllByTestId("form");
    expect(form.length).toBe(1);
  });

  test("fieldset should not be disabled by default  ", () => {
    const { getByTestId } = render(component);
    const form = getByTestId("form");
    const fieldset = within(form).getByTestId("fieldset");
    expect(fieldset).not.toBeDisabled();
  });
});
