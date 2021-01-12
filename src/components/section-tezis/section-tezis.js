import styles from './section-tezis.module.scss';
import React from 'react';
import cn from 'classnames';

function SectionTezis({ text }) {
  return (
    <ul className={cn(styles['section-tezis'])}>
      {text[0].text.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default SectionTezis;
