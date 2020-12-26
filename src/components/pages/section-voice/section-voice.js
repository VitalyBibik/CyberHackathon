import styles from './section-voice.module.scss';
import React from 'react';
import SectionTitle from '../../section-title';
import Button from "../../../ui/button";
import SvgMicro from "../../svg-icons/svg-micro";
import AudioPlayer from '../../audio-player/audio-player'

function SectionVoice({sectionVoice, buttonText}) {
  return (
      <>
        <SectionTitle title={sectionVoice.titleText[0].title}/>
         <AudioPlayer />
        <Button button={buttonText.mainButton[1]} icon={SvgMicro}/>
      </>
  );
}

export default SectionVoice;
