import React, { useRef, useState } from 'react';
import cn from 'classnames';
import styles from './audio-player.module.scss';
import throttling from '../../utils/throttling';
import PlayerTimeline from '../sound-timeline';
import Button from '../../ui/button';
import SvgMicro from '../svg-icons/svg-micro';
import SvgPause from '../svg-icons/svg-pause';

function SoundPlayer({ onClick, togglePlay, buttonText }) {
  const [isPlaying, setIsPlaying] = useState(false); // play or pause
  const myPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0); //  time song
  const [duration, setDuration] = useState(0);

  const canPlay = useRef(false);

  const ButtonColor = {
    RColor: true,
  };

  const onTimeUpdate = throttling((e) => {
    setCurrentTime(e.target.currentTime);
  }, 1000);

  const onPlay = (e) => {
    setDuration(e.target.duration);
  };
  const onPause = (e) => {
    setDuration(e.target.duration);
    canPlay.current = false;
  };

  const buttonPlay = () => {
    return <Button button={buttonText.mainButton[1]} icon={SvgMicro} />;
  };
  const buttonStop = () => {
    return (
      <Button
        button={buttonText.mainButton[2]}
        icon={SvgPause}
        color={ButtonColor}
      />
    );
  };
  /*  Управление кнпокой
       onClick={(_) => {
            if (isPlaying) {
              myPlayer.current.pause();
              setIsPlaying(false);
              togglePlay(isPlaying);
            } else {
              myPlayer.current.play();
              canPlay.current = true;
              setIsPlaying(true);
              togglePlay(isPlaying);
            }
          }}
   */

  return (
    <>
      <PlayerTimeline
        currentTime={currentTime}
        duration={duration}
        onClick={(time) => {
          myPlayer.current.currentTime = time;
        }}
      />
      {!isPlaying ? buttonPlay() : buttonStop()}
    </>
  );
}

export default SoundPlayer;
