import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SprkCardHighlightedHeader from './SprkCardHighlightedHeader';
import SparkTeaserCard from './SprkTeaserCard';
import warning from 'warning';

const SprkCard = (props) => {
  const {
    additionalCardClasses,
    children,
    highlightedHeaderConfig,
    idString,
    standout,
    teaserConfig
  } = props;

  const cardOnlyHasHighlightedHeaderProp = (highlightedHeaderConfig.length > 0 && teaserConfig.length === 0);
  const cardOnlyHasTeaserProp = (teaserConfig.length >= 1 && highlightedHeaderConfig.length === 0);
  const cardHasNoVariant = highlightedHeaderConfig.length === 0 && teaserConfig.length === 0;

  // Card can either only be base, teaser, or highlighted header
  warning(
    (cardOnlyHasTeaserProp || cardOnlyHasHighlightedHeaderProp || cardHasNoVariant),
    'Spark Design System: cannot have teaserConfig and highlightedHeaderConfig propTypes at the same time.'
  );

  const teaserHasIcon = () => {
    let iconCheck = false;

    if (teaserConfig.length > 0) {
      teaserConfig.map((config) => {
        const { mediaType } = config;

        if (mediaType === "icon") {
          return iconCheck = true
        } else { iconCheck = false}
      })
    }

    return iconCheck
  }

  const GetCardContent = () => {
    if (highlightedHeaderConfig.length > 0) {
      return (
        <SprkCardHighlightedHeader
          highlightedHeaderConfig={highlightedHeaderConfig}
        />
      )
    } else if (teaserConfig.length > 0) {
      return (
        <SparkTeaserCard
          teaserConfig={teaserConfig}
        />
      )
    } else {
      return (
        <React.Fragment>{children}</React.Fragment>
      )
    }
  }

  return (
    <div
      className={cx(
        'sprk-c-Card sprk-o-Stack',
        additionalCardClasses,
        {
          'sprk-c-Card--standout': standout,
          'sprk-u-TextAlign--center': teaserHasIcon()
        }
      )}
      data-id={idString}
    >
      <GetCardContent />
    </div>
  );
}

SprkCard.propTypes = {
  additionalCardClasses: PropTypes.string,
  children: PropTypes.node,
  highlightedHeaderConfig: PropTypes.arrayOf(PropTypes.shape({
    // Text inside of highlighted card
    bodyText: PropTypes.string,
    // Sub-headline of card
    description: PropTypes.string,
    // Headline of card
    title: PropTypes.string
  })),
  // ID
  idString: PropTypes.string,
  // Shadow darker than normal
  standout: PropTypes.bool,

  // Array of configs for teaserConfig
  teaserConfig: PropTypes.arrayOf(PropTypes.shape({
    // Extra classes that on the Call to Action of Teaser
    additionalCtaClasses: PropTypes.string,
    // Extra classes that on the Icon of the CTA teaser
    additionalCtaIconClasses: PropTypes.string,
    // Text inside of teaser card
    bodyText: PropTypes.string,
    // Analytics configuration
    ctaAnalytics: PropTypes.string,
    // Decides where the Call to Action will go
    ctaHref: PropTypes.string,
    // Option to add icon next to Call to Action
    ctaIcon: PropTypes.string,
    // Text of the Call to Action
    ctaText: PropTypes.string,
    // Chooses if the Call ot Action is a link or a button
    ctaType: PropTypes.oneOf(['link', 'button']),
    // Url for icon
    iconHref: PropTypes.string,
    // Option for icon analytic tracking
    iconLinkAnalytics: PropTypes.string,
    // Images get alt text
    imgAlt: PropTypes.string,
    // Decides where the img will go
    imgHref: PropTypes.string,
    // Option for image link analytic tracking
    imgLinkAnalytics: PropTypes.string,
    // Source of main image
    imgSrc: PropTypes.string,
    // Decides if main media of teaser card is an image or an icon
    mediaType: PropTypes.oneOf(['img', 'icon']),
    // Teaser's headline
    title: PropTypes.string,
    // Will change the order of teaser from title first to main media first
    titleFirst: PropTypes.bool
  })),
}

SprkCard.defaultProps = {
  highlightedHeaderConfig: [],
  teaserConfig: []
}

export default SprkCard;
