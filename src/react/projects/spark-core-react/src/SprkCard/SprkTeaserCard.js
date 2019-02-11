import React from 'react';
import cx from 'classnames';
import warning from 'warning';
import { uniqueId } from 'lodash';

const SprkTeaserCard = (props) => {
  const {
    teaserConfig
  } = props;

  return teaserConfig.map((config) => {
    const id = uniqueId();
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

    // If teaser has an image as the main media, it requires imgAlt and imgSrc
    if (mediaType === "img") {
      const missingImgProps = () => {
        let missingProps = [];

          if (!imgAlt) {
            missingProps.push("imgAlt")
          }

          if (!imgSrc) {
            missingProps.push("imgSrc")
          }
        return missingProps
      }

      const formattedMissingImgPropsList = () => {
          const missingImgPropsList = missingImgProps();
          let formattedImgPropsList = "";

          if (missingImgPropsList.length === 1) {
            formattedImgPropsList = missingImgPropsList[0];
          } else if (missingImgPropsList.length === 2) {
            //joins all with "and" but no commas
            formattedImgPropsList = missingImgPropsList.join(' and ');
          } else if (missingImgPropsList.length > 2) {
            //joins all with commas, but last one gets ", and"
            formattedImgPropsList = missingImgPropsList.slice(0, -1).join(', ') + ', and ' + missingImgPropsList.slice(-1);
          }
          return formattedImgPropsList;
      }

      warning(
        (imgAlt && imgSrc),
        "Spark Design System: If a teaser is using an image, it must include " + formattedMissingImgPropsList() + "."
      );

    }

    warning(
      (!ctaIcon && ctaText || ctaIcon && ctaText),
      "Call to action icons set by ctaIcon must be accompanied with ctaText"
    );


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
        'sprk-b-Link': ctaType === 'link',
        'sprk-o-Stack__item sprk-b-Link--simple sprk-b-Link--has-icon' : ctaIcon
      }
    )

    const GetCtaContent = () => {
      if (ctaType === 'link') {
        return (
          <a
            className={getCtaClasses}
            data-analytics={ctaAnalytics}
            href={ctaHref}
          >
            {ctaText}
            {ctaIcon &&
              ctaIcon
              /*
              <SprkIcon
                iconType={ctaIcon}
                additionalIconClasses={additionalCtaIconClasses}
              />
              */
            }
          </a>
        )
      } else {
        return (
          <div className="sprk-o-Stack__item">
            <a
              className={getCtaClasses}
              data-analytics={ctaAnalytics}
              href={ctaHref}
            >
              {ctaText}
            </a>
          </div>
        )
      }
    }

    if (!titleFirst) {
      return (
        <React.Fragment key={id}>
          <Media />
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large">
            <h3 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
              {title}
            </h3>
            <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
              {bodyText}
            </p>
            <GetCtaContent />
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment key={id}>
          <h3 className="sprk-o-Stack__item sprk-c-Card__content sprk-b-TypeDisplayFive">
            {title}
          </h3>
          <Media />
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large">
            <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
              {bodyText}
            </p>
            <GetCtaContent />
          </div>
        </React.Fragment>
      )
    }
  })
};

export default SprkTeaserCard;
