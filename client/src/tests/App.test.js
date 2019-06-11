import React from 'react';
import { shallow } from 'enzyme';

import App from  '../components/App.jsx';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App/>);

    expect(component).toMatchSnapshot();
  });
});
