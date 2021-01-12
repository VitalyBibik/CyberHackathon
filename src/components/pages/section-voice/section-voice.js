import styles from './section-voice.module.scss';
import React, { useState } from 'react';
import cn from 'classnames';
import SectionTitle from '../../section-title';
import AudioPlayer from '../../audio-player/audio-player';

function SectionVoice({ sectionVoice, buttonText }) {
  const [word, newWord] = useState(false);

  const changeWord = (word) => {
    return (
      <>
        <SectionTitle title={sectionVoice.titleText[1].title} />
        <h3 className={cn(styles['special-word'])}>{`'${word}'`}</h3>
      </>
    );
  };

  const baseTitle = () => {
    return <SectionTitle title={sectionVoice.titleText[0].title} />;
  };

  return (
    <>
      {word ? baseTitle() : changeWord('tratata')}
      <AudioPlayer buttonText={buttonText} />
    </>
  );
}

export default SectionVoice;
