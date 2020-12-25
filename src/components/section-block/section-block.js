import styles from './section-block.module.scss';
import SectionText from '../section-text/section-text';
import React from 'react';
import cn from 'classnames';

function SectionBlock({ sectionBlock }) {
  return (
    <>
      {sectionBlock.mainText.map((item) => (
        <div className={cn(styles['section-block'])} key={item.id}>
          {item.text.length > 1 ? (
            item.text.map((item, index) => (
              <SectionText text={item} key={index} />
            ))
          ) : (
            <SectionText text={item.text[0]} />
          )}
        </div>
      ))}
    </>
  );
}

export default SectionBlock;
