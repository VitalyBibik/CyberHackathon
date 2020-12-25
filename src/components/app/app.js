import styles from './app.module.scss';
import Root from '../root/root';
import React from 'react';
import cn from 'classnames';

function App() {

  return (
    <div className={cn(styles['app'])}>
      <div className={cn(styles['page'])}>
        <div className={cn(styles['page__container'])}>
            <Root />
        </div>
      </div>
    </div>
  );
}

export default App;
