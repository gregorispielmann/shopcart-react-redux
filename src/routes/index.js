import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Shop from '../pages/Shop';
import Checkout from '../pages/Checkout';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Shop} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
}
