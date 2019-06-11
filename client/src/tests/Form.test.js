import React from 'react';
import { shallow, mount } from 'enzyme';

import Form from  '../components/Form.jsx';

describe('Form', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Form/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly detect valid email & password', () => {
    const wrapper = mount(<Form />);
    const instance = wrapper.instance();

    const submitBtn = wrapper.find('#submitButton');
    const email = wrapper.find('#emailField');
    const password = wrapper.find('#emailField');

    email.simulate("change", {target: {name: "email", value: "m.brock.ross@gmail.com"}});
    password.simulate("change", {target: {name: "password", value: "abc"}});
    wrapper.update();

    expect(instance.validateEmail(wrapper.state().email) && instance.validatePW(wrapper.state().password)).toBe(true);
  })

  it('should correctly detect invalid email/password', () => {
    const wrapper = mount(<Form />);
    const instance = wrapper.instance();

    const submitBtn = wrapper.find('#submitButton');
    const email = wrapper.find('#emailField');
    const password = wrapper.find('#emailField');

    email.simulate("change", {target: {name: "email", value: "m.brock"}});
    password.simulate("change", {target: {name: "password", value: ""}});
    wrapper.update();

    expect(instance.validateEmail(wrapper.state().email) && instance.validatePW(wrapper.state().password)).toBe(false);
  })
});
