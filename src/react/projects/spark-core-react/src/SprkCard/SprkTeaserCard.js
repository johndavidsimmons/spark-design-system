import React from 'react';
import cx from 'classnames';

const SprkTeaserCard = (props) => {
  const {
    teaserConfig
  } = props;

  return teaserConfig.map((config) => {
    const {
      additionalCtaClasses,
      additionalCtaIconClasses,
      bodyText,
      ctaAnalytics,
      ctaHref,
      ctaIcon,
      ctaText,
      ctaType,
      iconHref,
      iconLinkAnalytics,
      imgAlt,
      imgHref,
      imgLinkAnalytics,
      imgSrc,
      mediaType,
      title,
      titleFirst,
    } = config;

    const Media = () => {
      if (mediaType === 'img') {
        return (
          <a href={imgHref} className="sprk-o-Stack__item" data-analytics={imgLinkAnalytics}>
            <img
              className={cx(
                {
                  'sprk-c-Card__media': !titleFirst
                }
              )}
              alt={imgAlt}
              src={imgSrc}
            />
          </a>
        )
      } else if (mediaType === 'icon') {
        return (
          <a href={iconHref} className="sprk-o-Stack__item sprk-u-AbsoluteCenter" data-analytics={iconLinkAnalytics}>
            SPARK REACT ICON WHEN READY
            will use iconType prop to pass into SprkIcon
            will use additionalIconClasses to pass into SprkIcon
            {/* NEED NEED NEED NEED REACT ICON */}

            {/*
            <SprkIcon
              iconType={iconType}
              additionalIconClasses={additionalIconClasses}
            />
            */}

          </a>
        )
      }
    }

    const getCtaClasses = cx(
      additionalCtaClasses,
      {
        'sprk-c-Button': ctaType === 'button',
        'sprk-b-Link': ctaType === 'link'
      }
    )

    if (!titleFirst) {
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
              <a
                className={getCtaClasses}
                data-analytics={ctaAnalytics}
                href={ctaHref}
              >
                {ctaText}
              </a>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h3 className="sprk-o-Stack__item sprk-c-Card__content sprk-b-TypeDisplayFive">
            {title}
          </h3>
          <Media />
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large">
            <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
              {bodyText}
            </p>
            <div className="sprk-o-Stack__item">
              <a className={getCtaClasses} href={ctaHref} data-analytics={ctaAnalytics} id="foo">
                {ctaText}
                {ctaIcon &&
                  {/*
                  <SprkIcon
                    iconType={ctaIcon}
                    additionalIconClasses={additionalCtaIconClasses}
                  />
                  */}
                }
              </a>
            </div>
          </div>
        </React.Fragment>
      )
    }
  })
};

export default SprkTeaserCard;
