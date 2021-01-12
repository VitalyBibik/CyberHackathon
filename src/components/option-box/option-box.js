import styles from './option-box.module.scss';
import React, { useState } from 'react';
import cn from 'classnames';

const OptionBox = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className={cn(styles['option-box'])}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={cn(styles['checkbox'])}
      />
      <span className={cn(styles['small-span'])} />
      <span
        className={cn(styles['checkmark'], {
          [styles['checkmark_checked']]: checked,
        })}
      >
        {'Не показывать это при запуске'}
      </span>
    </label>
  );
};

export default OptionBox;
