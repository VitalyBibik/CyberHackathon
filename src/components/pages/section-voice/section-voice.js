import styles from './section-voice.module.scss';
import React from 'react';
import SectionTitle from '../../section-title';
import AudioPlayer from '../../audio-player/audio-player';

function SectionVoice({ sectionVoice, buttonText }) {
  return (
    <>
      <SectionTitle title={sectionVoice.titleText[0].title} />
      <AudioPlayer buttonText={buttonText} />
    </>
  );
}

export default SectionVoice;
