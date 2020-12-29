import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

const Button = ({ button, icon, color, onClick }) => {
  console.log(onClick);
  return (
    <button
      className={cn(styles['button'], styles['button__text'], {
        [styles['button_color_red']]: color,
      })}
      onClick={onClick}
    >
      {<span className={cn(styles['button__icon'])}>{icon()}</span>}
      {button.name}
    </button>
  );
};
export default Button;
