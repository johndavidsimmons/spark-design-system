import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAccordion from './SprkAccordion';
import { executionAsyncId } from 'async_hooks';

Enzyme.configure({ adapter: new Adapter() });

it('should display a ul element with the correct base classes', () => {
  const wrapper = shallow(<SprkAccordion />);
  expect(wrapper.find('ul.sprk-c-Accordion.sprk-o-VerticalList').length).toBe(1);
});
