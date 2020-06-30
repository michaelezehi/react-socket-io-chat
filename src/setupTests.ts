import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import * as sinon from "sinon";
import { mount, render, shallow } from "enzyme";

// @ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// @ts-ignore
global.React = React;
// @ts-ignore
global.shallow = shallow;
// @ts-ignore
global.render = render;
// @ts-ignore
global.mount = mount;
// @ts-ignore
global.sinon = sinon;
