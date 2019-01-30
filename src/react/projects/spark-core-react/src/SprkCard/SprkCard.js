import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkCard = (props) => {
  const {
    additionalClasses,
    additionalClassesIcon,
    additionalCtaClasses,
    bodyText,
    children,
    variant,
    ctaAnalytics,
    ctaHref,
    ctaText,
    ctaType,
    iconHref,
    iconLinkAnalytics,
    iconType,
    imgAlt,
    imgHref,
    imgLinkAnalytics,
    imgSrc,
    mediaType,
    standout,
    title,
    idString
  } = props;

  const classNames = classnames(
    'sprk-c-Card sprk-o-Stack',
    additionalClasses,
    {
      'sprk-c-Card--standout' : standout,
      'sprk-u-TextAlign--center': mediaType === 'icon'
    }
  );

  const getCtaClasses = classnames(
    additionalCtaClasses,
    {
      'sprk-c-Button': ctaType === 'button',
      'sprk-b-Link': ctaType === 'link'
    }
  )

  const Media = () => {
    if (mediaType === 'img') {
      return (
        <a href={imgHref} className="sprk-o-Stack__item" data-analytics={imgLinkAnalytics}>
          <img
            className="sprk-c-Card__media"
            alt={imgAlt}
            src={imgSrc} />
        </a>
      )
    } else if (mediaType === 'icon') {
      return (
        <a href={iconHref} className="sprk-o-Stack__item sprk-u-AbsoluteCenter" data-analytics={iconLinkAnalytics}>
          SPARK REACT ICON WHEN READY
          will use iconType prop to pass into SprkIcon
          will use additionalClassesIcon to pass into SprkIcon
          {/* NEED NEED NEED NEED REACT ICON */}
        </a>
      )
    }
  }

  const TeaserCardContent = () => {
    return (
      <React.Fragment>
        <Media />
        <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large">

          <h3 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
            {title}
          </h3>

          <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
            {bodyText}
          </p>

          <div className="sprk-o-Stack__item">
            <a className={getCtaClasses} href={ctaHref} data-analytics={ctaAnalytics} id="foo">
              {ctaText}
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className={classNames} data-id={idString}>
      {variant === 'teaser' ? <TeaserCardContent /> : children }
    </div>
  );
}

SprkCard.propTypes = {
  // classes to add to the class of the rendered element
  additionalClasses: PropTypes.string,
  // incoming children
  children: PropTypes.node,
  // mapped to data-id for analytics purposes
  idString: PropTypes.string,
  // if true, will render a spinner in the button instead of children
  variant: PropTypes.oneOf(['base', 'standout', 'teaser', 'teaserHeader']),
}

SprkCard.defaultProps = {
  disabled: false,
  element: 'button',
  variant: 'base',
  loading: false,
}

export default SprkCard;
