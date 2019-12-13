import * as React from "react";
import { mount } from "enzyme";

import App from './App'


it("renders the app", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Router').exists()).toEqual(true);
});



