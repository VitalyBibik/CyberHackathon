import styles from './section-title.module.scss';
import React from 'react';
import cn from 'classnames';

const SectionTitle = ({ title }) => {
  console.log('Sect-Title', title);
  return <h2 className={cn(styles['section-title'])}>{title}</h2>;
};

export default SectionTitle;
