import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';



const Button = ({button, icon}) => {
    console.log({icon});
    return (
       <button className={cn(styles['button'],styles['button__text'])}>
           {
               <span className={cn(styles['button__icon'])}>{icon()}</span>
           }
           {
               button.name
           }

       </button>

    )
}
export default Button;
