import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import {Link} from 'react-router-dom';

import { SprkButton } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkButtonDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Primary Buttons">
        <SprkButton>Button Text</SprkButton>
        <SprkButton element="a" href="#nogo">Link Button</SprkButton>
        <SprkButton element="a" href="#nogo" target="_blank">Link Button w/ New Window</SprkButton>
        <SprkButton disabled>Disabled Button</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Secondary Buttons">
        <SprkButton variant="secondary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Tertiary Buttons">
        <SprkButton variant="tertiary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Loading Button">
        <SprkButton loading>Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Incoming Element">
        <SprkButton element={Link} to='/links'>React Router Link</SprkButton>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkButtonDocs;
