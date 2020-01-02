import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from "./containers/HomePage/HomePage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/home" component={HomePage}/>
      <Route
        path="/projects"
        render={({match: {url}}) => (
          <>
            <Route path={`${url}/`} component={HomePage} exact/>
            <Route path={`${url}/projectone`} component={HomePage}/>
          </>
        )}
      />
      <Route component={NotFoundPage}/>
    </Switch>
  );
};
export default (Routes);
