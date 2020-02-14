import React from "react";
import AuthorList from "../../components/addCourse/AuthorList";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { within, render } from "@testing-library/react";


const component = (
  <Provider store={store}>
    <AuthorList />
  </Provider>
);

const tree = render(component)


it("should render", () => {
  expect(tree.firstChild).toMatchSnapshot();
});

test("should be a form-group", () => {
  const { getByTestId } = render(component)
  const authorList = getByTestId("author-list");
  expect(authorList).toHaveClass('form-group')

});

test("should have select", () => {
  const { getByTestId } = render(component);
  const authorList = getByTestId("author-list");
  const select = within(authorList).getAllByTestId("select");
  expect(select.length).toBe(1);
});

test("should have options", () => {
  const { getByTestId } = render(component);
  const select = getByTestId("select");
  const options = within(select).getAllByTestId("option");
  expect(options.length).toBe(1);
});



