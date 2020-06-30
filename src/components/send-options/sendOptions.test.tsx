import { shallow } from "enzyme";
import * as React from "react";
import SendingOptions from "./sendOptions";
import translationsMock from "../../translations/translations-mock";

jest.mock("../../utils/localStorageService");

const setup = () => {
  return shallow(<SendingOptions translations={translationsMock} />);
};

describe("SendingOptions component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });
});
