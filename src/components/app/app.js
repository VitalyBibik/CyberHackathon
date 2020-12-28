import styles from './app.module.scss';
import Root from '../pages/root/root';
import React from 'react';
import cn from 'classnames';
import { Route, Link, Switch } from 'react-router-dom';
import PageNotFound from '../pages/page-not-found';
import SectionVoice from '../pages/section-voice';
import { mainPageText } from '../../fixtures';
import { buttonText } from '../../buttonText';
import MainVoice from '../pages/main-voice';
import Feedback from '../pages/feedback';

function App() {
  return (
    <div className={cn(styles['app'])}>
      <div className={cn(styles['page'])}>
        <div className={cn(styles['page__container'])}>
          <Switch>
            <Route exact path="/CyberHackathon">
              <Root root={mainPageText} buttonText={buttonText} />
            </Route>
            <Route exact path="/CyberHackathon/NewVoice">
              <SectionVoice
                sectionVoice={mainPageText}
                buttonText={buttonText}
              />
            </Route>
            <Route exact path="/CyberHackathon/MainVoice">
              <MainVoice mainVoice={mainPageText} buttonText={buttonText} />
            </Route>
            <Route exact path="/CyberHackathon/FeedBack">
              <Feedback feedBack={mainPageText} buttonText={buttonText} />
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
