import { shallow } from "enzyme";
import * as React from "react";
import ClockSelector from "./clockSelector";
import translationsMock from "../../translations/translations-mock";

jest.mock("../../utils/localStorageService");

const setup = () => {
  return shallow(<ClockSelector translations={translationsMock} />);
};

describe("ClockModeSelector component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });
});
