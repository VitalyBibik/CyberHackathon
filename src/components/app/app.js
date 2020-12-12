import styles from './app.module.css';
import Root from '../root/root';
import React from 'react';
import Footer from '../footer';
import { config } from '../../config';

function App() {

  return (
    <div className={styles['app']}>
      <div className={styles['page']}>
        <div className={styles['page__container']}>
            <Root />
        </div>
      </div>
      <Footer config={config} />
    </div>
  );
}

export default App;
