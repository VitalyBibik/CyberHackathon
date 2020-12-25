import styles from './option-box.module.scss';
import React from 'react';
import cn from 'classnames';

const OptionBox = (props) => {
    return (
            <label
                className={cn(styles['option-box'])}
            >
                <input type={'checkbox'}/>
                <span className={cn(styles['checkmark'])}>
                     {'Не показывать это при запуске'}
                </span>
            </label>
                );

}


export default OptionBox;
