import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

const Button = ({ button, icon, color }) => {
  return (
    <button
      className={cn(styles['button'], styles['button__text'], {
        [styles['button_color_red']]: color,
      })}
    >
      {<span className={cn(styles['button__icon'])}>{icon()}</span>}
      {button.name}
    </button>
  );
};
export default Button;
