import styles from './section-voice.module.scss';
import React from 'react';
import SectionBlock from '../../section-block/section-block';
import { buttonText } from '../../../buttonText';
import Button from '../../../ui/button';
import SvgPlus from '../../svg-icons/svg-plus';
import SectionTitle from '../../section-title';

function SectionVoice({ mainPageText }) {
  console.log('SectVoice', mainPageText);
  return (
    <div>
      <SectionTitle title={mainPageText} />
    </div>
  );
}

export default SectionVoice;
