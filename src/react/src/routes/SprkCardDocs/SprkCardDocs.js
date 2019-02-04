import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkCard } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import cardImage from '../../../src/assets/images/desktop.jpg';

const SprkLinkDocs = () => {
  const teaserImage = cardImage.toString();

  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Base Card</h3>
        <SprkCard>
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large">
            Base Card Content
          </div>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Standout Card</h3>
        <SprkCard standout>
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium">
            Standout Card Content
          </div>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Card with Highlighted Header Array</h3>
        <SprkCard
          standout
          idString="card-3"
          highlightedHeaderConfig={
            [
              {
                bodyText: 'Highlight header card body text. Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam.',
                title: 'Highlight Header Card Title',
                description: 'Highlight Header Description',
              }
            ]
          }
          />

      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Teaser Card with Button CTA</h3>
        <SprkCard
          idString="card-4"
          teaserConfig={
            [
              {
                bodyText: 'Body text of a teaser card.',
                ctaAnalytics: 'Button: Spark',
                ctaHref: 'www.sparkdesignsystem.com',
                ctaText: 'Learn More',
                ctaType: 'button',
                imgAlt: 'Placeholder Image',
                imgHref: 'www.sparkdesignsystem.com',
                imgLinkAnalytics: 'Card:teaser link',
                imgSrc: teaserImage,
                mediaType: 'img',
                title: 'Teaser Card Title',
                titleFirst : false
              }
            ]
          }
        >
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Teaser Card with Icon</h3>
        <SprkCard
          idString="card-4"
          teaserConfig={
            [
              {
                bodyText: 'Body text of a teaser card.',
                ctaAnalytics: 'link: Spark',
                ctaHref: 'www.sparkdesignsystem.com',
                ctaText: 'Learn More',
                ctaType: 'link',
                iconHref: '#',
                iconLinkAnalytics: 'icon:link',
                iconType: 'check',
                additionalIconClasses: '',
                mediaType: 'icon',
                title: 'Teaser Card Title',
                titleFirst: false
              }
            ]
          }
        >
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Teaser Card with Alternative Element Order</h3>
        <SprkCard
          idString="card-4"
          teaserConfig={
            [
              {
                bodyText: 'Body text of a teaser card.',
                ctaAnalytics: 'Button: Spark',
                ctaHref: 'www.sparkdesignsystem.com',
                ctaText: 'Learn More',
                ctaType: 'button',
                imgAlt: 'Placeholder Image',
                imgHref: 'www.sparkdesignsystem.com',
                imgLinkAnalytics: 'Card:teaser link',
                imgSrc: teaserImage,
                mediaType: 'img',
                title: 'Teaser Card Title',
                titleFirst: true
              }
            ]
          }
        >
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Card Layout - Two Up</h3>
        Need React Split
        <SprkCard standout idString="card-5">
          Card 1
        </SprkCard>
        <SprkCard standout idString="card-5">
          Card 2
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Card Layout - Four Up</h3>
        Need React Split
        <SprkCard standout idString="card-5">
          Card 1
        </SprkCard>
        <SprkCard standout idString="card-5">
          Card 2
        </SprkCard>
        <SprkCard standout idString="card-5">
          Card 3
        </SprkCard>
        <SprkCard standout idString="card-5">
          Card 4
        </SprkCard>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkLinkDocs;
