import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import asyncComponent from "./../../lib/AsyncComponent";

const Landing = asyncComponent(() => import("./../Landing/Landing"));

export default class Core extends Component {
  render() {
    return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </Fragment>
    );
  }
}
