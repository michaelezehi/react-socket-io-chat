import { shallow } from "enzyme";
import * as React from "react";
import Username from "./username";

const setup = (username = "") => {
  return shallow(<Username value={username} />);
};

describe("Nickname component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it("should render user name if given", () => {
    let wrapper = setup();
    expect(wrapper.text()).toBe("");
    wrapper = setup("NewGuest_007");
    expect(wrapper.text()).toBe("NewGuest_007");
  });
});
