import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkAccordionItem = (props) => {
  const { children, title, analyticsString, idString, isOpen, additionalClasses, ...other } = props;

  return (
    <li data-sprk-toggle="container" className={
      classnames(
        'sprk-c-Accordion__item',
        additionalClasses, {
          'sprk-c-Accordion__item--open': isOpen === true
        }
      )
    }
    {...other}>
      <a 
        aria-controls="details-one" 
        className="sprk-c-Accordion__summary" 
        data-id={idString} 
        data-analytics={analyticsString} 
        data-sprk-toggle="trigger"
        data-sprk-toggle-type="accordion"
        href="#">
          <h3 className="sprk-c-Accordion__heading sprk-b-TypeDisplaySeven">{title}</h3>


          <svg
          className="sprk-c-Icon sprk-c-Icon--toggle sprk-c-Icon--l sprk-c-Accordion__icon"
          data-sprk-toggle="icon"
          viewBox="0 0 64 64">
            <use
              xlinkHref="#chevron-up-circle-two-color"
              data-sprk-toggle="accordionIconUseElement"></use>
          </svg>
        </a>
        <div data-sprk-toggle="content">
          <div className="sprk-c-Accordion__content sprk-o-Stack sprk-o-Stack--medium">
            {children}
          </div>
        </div>
    </li>
  );
}

export default SprkAccordionItem;