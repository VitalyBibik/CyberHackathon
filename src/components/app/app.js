import styles from './app.module.scss';
import Root from '../root/root';
import React from 'react';
import { config } from '../../config';

function App() {

  return (
    <div className={styles['app']}>
      <div className={styles['page']}>
        <div className={styles['page__container']}>
            <Root />
        </div>
      </div>
    </div>
  );
}

export default App;
