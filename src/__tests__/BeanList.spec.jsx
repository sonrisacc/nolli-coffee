import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import BeansData from '../../exampleBeanData.json';
import BeanList from '../BeanList';
import BeanCard from '../BeanCard';

test('BeanList renders correctly', () => {
  // const component = renderer.create(<BeanList />);
  // const tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  const component = shallow(<BeanList />);
  expect(component).toMatchSnapshot();
});

test('BeanList should render correct amount of beans', () => {
  const component = shallow(<BeanList />);
  expect(component.find(BeanCard).length).toEqual(BeansData.beans.length);
});
