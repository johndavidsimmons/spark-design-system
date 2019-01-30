import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkAccordion = (props) => {
  const { children, additionalClasses, idString, ...other } = props;

  return (
    <ul className={
      classnames(
        'sprk-c-Accordion',
        'sprk-o-VerticalList',
        additionalClasses
      )}
      data-id={idString}
      {...other} >
      {children}
    </ul>
  );
}

SprkAccordion.propTypes = {
  // The children that will be rendered inside the ul element. Expects SprkAccordionItem component
  children: PropTypes.node,
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the ul element
  additionalClasses: PropTypes.string,
};

export default SprkAccordion;
