import styles from './feedback.module.scss';
import React, { useState } from 'react';
import cn from 'classnames';
import SectionTitle from '../../section-title';
import Button from '../../../ui/button';
import SvgSend from '../../svg-icons/svg-send';

function Feedback({ feedBack, buttonText }) {
  return (
    <>
      <SectionTitle title={feedBack.titleText[3].title} />
      <div className={cn(styles['feedback'])}>
        <p className={cn(styles['feedback__text'])}>
          Укажите вашу эл.почту, если хотите отслеживать развитие обращения
        </p>
        <input className={cn(styles['feedback__input'])} />
      </div>
      <Button button={buttonText.mainButton[4]} icon={SvgSend} />
    </>
  );
}

export default Feedback;
