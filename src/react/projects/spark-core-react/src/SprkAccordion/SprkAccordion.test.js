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

it('should display a ul element with the correct classes if additionalClasses has a value', () => {
  const wrapper = shallow(<SprkAccordion additionalClasses="additionalClass"/>);
  expect(wrapper.find('ul').hasClass('sprk-c-Accordion')).toBe(true);
  expect(wrapper.find('ul').hasClass('additionalClass')).toBe(true);
});

it('should display a ul element with correct data-id if ifString has a value', () => {
  const wrapper = shallow(<SprkAccordion idString='accordion-1' />);
  expect(wrapper.find('ul[data-id="accordion-1"]').length).toBe(1);
});