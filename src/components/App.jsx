import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './modules/Home';
import DetailView from './modules/DetailView';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/subreddit/:id" component={DetailView} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
