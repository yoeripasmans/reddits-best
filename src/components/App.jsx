import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './modules/Home';
import DetailView from './modules/DetailView';

const App = () => {
  return (
    <main>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/subreddit/:id" component={DetailView} />
      </Switch>
    </main>
  );
};

export default App;
