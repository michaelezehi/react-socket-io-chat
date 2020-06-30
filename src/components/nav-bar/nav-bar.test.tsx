import { shallow } from "enzyme";
import * as React from "react";
import { NavBar } from "./nav-bar";
import translationsMock from "../../translations/translations-mock";
import { NavLink } from "react-router-dom";

jest.mock("../../utils/localStorageService");

const setup = () => {
  return shallow(
    <NavBar
      messages={[]}
      username={"NewGuest_007"}
      appContext={translationsMock}
      connectToSockets={jest.fn}
    />
  );
};

describe("Navigation component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it("should have the right number navigation elements", () => {
    const wrapper = setup();
    expect(wrapper.find("li").length).toEqual(2);
  });

  it("should render navigation links", () => {
    const wrapper = setup();
    expect(wrapper.find(NavLink).length).toEqual(2);
  });
});
