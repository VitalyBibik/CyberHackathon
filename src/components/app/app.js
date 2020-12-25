import styles from './app.module.scss';
import Root from '../pages/root/root';
import React from 'react';
import cn from 'classnames';
import { Route, Link, Switch } from 'react-router-dom';
import PageNotFound from '../pages/page-not-found';

function App() {
  return (
    <div className={cn(styles['app'])}>
      <div className={cn(styles['page'])}>
        <div className={cn(styles['page__container'])}>
          <Switch>
            <Route path="/CyberHackathon">
              <Root />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
