import React from "react";
import CourseList from "../../components/courses/CourseList";
import CourseItem from "../../components/courses/CourseItem";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { within, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const component = (
  <Provider store={store}>
    <Router>
      <CourseList
        items={[
          {
            author: "author",
            authorId: 2,
            title: "title",
            category: "category",
            slug: "slug"
          }
        ]}
      />
    </Router>
  </Provider>
);

const tree = render(component);

describe("Test CourseList Component", () => {
  it("should render", () => {
    expect(tree.firstChild).toMatchSnapshot();
  });

  it('should contain table', () => {
      const { getAllByTestId } = render(component)
      const table = getAllByTestId("courses-table")
      expect(table.length).toBe(1)
  });

  it('should contain a table head', () => {
    const { getAllByTestId } = render(component)
    const tableHead = getAllByTestId("courses-table-head")
    expect(tableHead.length).toBe(1)
  });

  it('should contain a table body', () => {
    const { getAllByTestId } = render(component)
    const tableBody = getAllByTestId("courses-table-body")
    expect(tableBody.length).toBe(1)
  });
});
