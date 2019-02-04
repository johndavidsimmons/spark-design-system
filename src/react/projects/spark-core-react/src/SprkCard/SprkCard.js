import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkCardHighlightedHeader from './SprkCardHighlightedHeader';
import SparkTeaserCard from './SprkTeaserCard';

const SprkCard = (props) => {
  const {
    additionalCardClasses,
    children,
    highlightedHeaderConfig,
    idString,
    standout,
    teaserConfig
  } = props;


  const teaserHasIcon = () => {
    let iconCheck = false;

    teaserConfig.map((config) => {
      const { mediaType } = config;

      if (mediaType === "icon") {
        return iconCheck = true
      } else { iconCheck = false}
    })

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
      className={classnames(
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
  additionalClasses: PropTypes.string,
  children: PropTypes.node,
  highlightedHeaderConfig: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    cardTitle: PropTypes.string,
    cardBodyText: PropTypes.string
  })),
  idString: PropTypes.string,
  standout: PropTypes.bool,
  teaserConfig: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    cardTitle: PropTypes.string,
    cardBodyText: PropTypes.string
  })),
}

SprkCard.defaultProps = {
  highlightedHeaderConfig: [],
  teaserConfig: []
}

export default SprkCard;
