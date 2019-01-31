import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkCard } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import cardImage from '../../../src/assets/images/desktop.jpg';

const SprkLinkDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Base Card</h3>
        <SprkCard>
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large">
            Base Card Content
          </div>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Standout Card</h3>
        <SprkCard standout>
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--medium">
            Standout Card Content
          </div>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Card with Highlighted Header</h3>
        <SprkCard standout idString="card-3">
          <div className="sprk-o-Stack__item sprk-c-Card__header sprk-o-Stack sprk-o-Stack--medium">
            <h3 className="sprk-b-TypeDisplaySeven sprk-o-Stack__item sprk-u-Color--white">
              Description
            </h3>
            <h4 className="sprk-b-TypeDisplayFive sprk-o-Stack__item sprk-u-Color--white">
              Card Title
            </h4>
          </div>
          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-c-Card__content">
            <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
              Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam.
            </p>
          </div>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Teaser Card with Button CTA</h3>
        <SprkCard
          variant="teaser"
          title="Teaser Card Title"
          bodyText="Body text of a teaser card."
          mediaType="img"
          imgSrc={cardImage}
          imgAlt="Placeholder Image"
          imgHref="www.sparkdesignsystem.com"
          imgLinkAnalytics="Card:teaser link"
          ctaType="button"
          ctaText="Learn More"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Button: Spark"
          idString="card-4"
        >
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Teaser Card with Link CTA</h3>
        <SprkCard
          variant="teaser"
          title="Teaser Card Title"
          bodyText="Body text of a teaser card."
          mediaType="img"
          imgSrc={cardImage}
          imgAlt="Placeholder Image"
          imgHref="www.sparkdesignsystem.com"
          imgLinkAnalytics="Card:teaser link"
          ctaType="link"
          ctaText="Learn More"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Button: Spark"
          idString="card-4"
        >
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Teaser Card with Icon</h3>
        <SprkCard
          variant="teaser"
          title="Teaser Card Title"
          bodyText="Body text of a teaser card."
          mediaType="icon"
          iconHref="www.sparkdesignsystem.com"
          iconLinkAnalytics="Card:teaser icon"
          ctaType="button"
          ctaText="Learn More"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Button: Spark"
          idString="card-4"
        >
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Teaser Card with Alternative Element Order</h3>
        <SprkCard standout idString="card-5">
          <h3 className="sprk-o-Stack__item sprk-c-Card__content sprk-b-TypeDisplayFive">
            Title
          </h3>
          <a href="#" className="sprk-o-Stack__item">
            <img
              alt="Spark placeholder image"
              src={cardImage} />
          </a>
          <div className="sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large">
            <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
              Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam.
            </p>
            <div className="sprk-o-Stack__item">
              <a href="#" className="sprk-c-Button">
                Learn More
              </a>
            </div>
          </div>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Card Layout - Two Up</h3>
        Need React Split
        <SprkCard standout idString="card-5">
          Card 1
        </SprkCard>
        <SprkCard standout idString="card-5">
          Card 2
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 class="sprk-b-TypeDisplayFour sprk-u-mbm">Card Layout - Four Up</h3>
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
