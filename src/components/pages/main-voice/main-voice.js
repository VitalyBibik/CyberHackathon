import styles from './main-voice.module.scss';
import React, { useState } from 'react';
import cn from 'classnames';
import SectionTitle from '../../section-title';
import Button from '../../../ui/button';
import SvgSend from '../../svg-icons/svg-send';

function MainVoice({ mainVoice, buttonText }) {
  console.log(buttonText);
  /* TODO-Подключить редакс, присоединить компонент, написать thunk мидлвару для получения данных и последующей обработкой в функции */

  return (
    <>
      <SectionTitle title={mainVoice.titleText[2].title} />
      <p className={cn(styles['main'])}>
        <span className={cn(styles['main__words'])}>Я</span> ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        Lorem <span className={cn(styles['main__words'])}>хочу</span> dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        <span className={cn(styles['main__words'])}>Я</span> ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        Lorem <span className={cn(styles['main__words'])}>хочу</span> dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        <span className={cn(styles['main__words'])}>Я</span> ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        Lorem <span className={cn(styles['main__words'])}>хочу</span> dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        <span className={cn(styles['main__words'])}>Я</span> ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        Lorem <span className={cn(styles['main__words'])}>хочу</span> dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        <span className={cn(styles['main__words'])}>Я</span> ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <p className={cn(styles['main'])}>
        Lorem <span className={cn(styles['main__words'])}>хочу</span> dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <Button button={buttonText.mainButton[3]} icon={SvgSend} />
    </>
  );
}

export default MainVoice;
