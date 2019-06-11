import React from 'react';
import { shallow } from 'enzyme';

import Form from  '../components/Form.jsx';

describe('Form', () => {
  it('should render correctly', () => {
    const component = shallow(<Form/>);

    expect(component).toMatchSnapshot();
  });
});
