import React from "react";
import Navbar from "../../components/navbar";
import renderer from "react-test-renderer";

const tree = renderer.create(<Navbar items={[]} />).toJSON();

describe("Testing Navbar Component", () => {
  it("should render navbar", () => {
    expect(tree).toMatchSnapshot();
  });
});
