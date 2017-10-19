import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import BeanList from '../BeanList';

test('BeanList renders correctly', () => {
  // const component = renderer.create(<BeanList />);
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  const component = shallow(<BeanList />);
  expect(component).toMatchSnapshot();
});
