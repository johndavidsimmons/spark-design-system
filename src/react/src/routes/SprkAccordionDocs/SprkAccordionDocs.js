import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkAccordion, SprkAccordionItem } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkAccordionDocs = () =>{
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <SprkAccordion>
          <SprkAccordionItem isOpen>
          
          </SprkAccordionItem>
        </SprkAccordion>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkAccordionDocs;