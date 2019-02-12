import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SprkButtonDocs from './SprkButtonDocs/SprkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import SprkPromoDocs from './SprkPromoDocs/SprkPromoDocs';
import SprkDividerDocs from './SprkDividerDocs/SprkDividerDocs';
import SprkAlertDocs from './SprkAlertDocs/SprkAlertDocs';
import SprkMastheadDefaultDocs from './SprkMastheadDefaultDocs/SprkMastheadDefaultDocs';
import SprkMastheadExtendedDocs from './SprkMastheadExtendedDocs/SprkMastheadExtendedDocs';
import SprkDropdownDocs from './SprkDropdownDocs/SprkDropdownDocs';
import SprkHighlightBoardDocs from './SprkHighlightBoardDocs/SprkHighlightBoardDocs';
import SprkDictionaryDocs from './SprkDictionaryDocs/SprkDictionaryDocs';
import SprkCardDocs from './SprkCardDocs/SprkCardDocs';
import SprkTabsDocs from './SprkTabsDocs/SprkTabsDocs';
import SprkIconDocs from './SprkIconDocs/SprkIconDocs';
import NotFound from './NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/alert" component={SprkAlertDocs} />
      <Route exact path="/button" component={SprkButtonDocs} />
      <Route exact path="/card" component={SprkCardDocs} />
      <Route exact path="/dropdown" component={SprkDropdownDocs} />
      <Route exact path="/icon" component={SprkIconDocs} />
      <Route exact path="/link" component={SprkLinkDocs} />
      <Route exact path="/promos" component={SprkPromoDocs} />
      <Route exact path="/dividers" component={SprkDividerDocs} />
      <Route exact path="/masthead-default" component={SprkMastheadDefaultDocs} />
      <Route exact path="/masthead-extended" component={SprkMastheadExtendedDocs} />
      <Route exact path="/highlightboard" component={SprkHighlightBoardDocs} />
      <Route exact path="/dictionary" component={SprkDictionaryDocs} />
      <Route exact path="/tabs" component={SprkTabsDocs} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
