import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';

import ThumbnailAudio from 'src/assets/images/audio.gif';
import ThumbnailAudioStatic from 'src/assets/images/audio_static.png';
import FullScreenIcon from 'src/assets/images/icon_full_screen.svg';
import MuteIcon from 'src/assets/images/icon_mute.svg';
import PauseIcon from 'src/assets/images/icon_pause.svg';
import PlayIcon from 'src/assets/images/icon_play.svg';
import VolumeIcon from 'src/assets/images/icon_volume.svg';

import './styles.scss';

const MediaPlayer = ({
  src,
  controllerClassName,
  isVideo,
  videoClassName,
  wrapperClassName,
}: {
  src: any;
  controllerClassName?: any;
  isVideo?: boolean;
  videoClassName?: any;
  wrapperClassName?: any;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showController, setShowController] = useState(true);

  // references
  const audioPlayer = useRef<any>(); // reference our audio component
  const progressBar = useRef<any>(); // reference our progress bar
  const animationRef = useRef<any>(); // reference the animation

  const calculateTime = (secs: any) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };
  const remainTime = calculateTime(duration - currentTime);
  const playTime = calculateTime(currentTime);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (progressBar?.current?.value) {
      progressBar.current.value = audioPlayer?.current?.currentTime;
    }

    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar?.current?.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    const percentage = (progressBar?.current?.value / duration) * 100;
    progressBar?.current?.style?.setProperty('--seek-before-width', `${percentage}%`);
    setCurrentTime(progressBar?.current?.value);
  };

  const toggleMute = () => {
    setIsMuted((state) => !state);
  };
  const openFullscreen = () => {
    if (audioPlayer?.current?.requestFullscreen) {
      audioPlayer?.current?.requestFullscreen();
    } else if (audioPlayer?.current?.webkitRequestFullscreen) {
      /* Safari */
      audioPlayer?.current?.webkitRequestFullscreen();
    } else if (audioPlayer?.current?.msRequestFullscreen) {
      /* IE11 */
      audioPlayer?.current?.msRequestFullscreen();
    }
  };
  useEffect(() => {
    const setAudioData = () => {
      const seconds = audioPlayer.current.duration;
      setDuration(seconds);
      progressBar.current.max = seconds;
    };
    audioPlayer?.current?.addEventListener('loadeddata', setAudioData);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioPlayer?.current?.removeEventListener('loadeddata', setAudioData);
    };
  }, []);
  const handleMouseOver = () => {
    setShowController(true);
  };
  const handleMouseOut = () => {
    isPlaying && setShowController(false);
  };

  return (
    <div className={cx('audio-player', wrapperClassName)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isVideo ? (
        <video
          onClick={togglePlayPause}
          className={cx('audio-player__video', videoClassName)}
          ref={audioPlayer}
          src={src}
          muted={isMuted}
          preload='metadata'
          loop
        />
      ) : (
        <>
          <img
            src={isPlaying ? ThumbnailAudio : ThumbnailAudioStatic}
            className={cx('audio-player__video', videoClassName)}
            alt=''
          />
          <audio ref={audioPlayer} src={src} muted={isMuted} preload='metadata' loop />
        </>
      )}
      <div className={cx('controller', controllerClassName, isVideo && !showController && 'controller--hidden')}>
        <button type='button' onClick={togglePlayPause} className={cx('controller-playPause', 'controller-button')}>
          <img src={isPlaying ? PauseIcon : PlayIcon} className='controller-play' alt='' />
        </button>
        <div className='progress-wrap'>
          <input type='range' className='progress-bar' defaultValue='0' ref={progressBar} onChange={changeRange} />
        </div>
        <div className='duration'>{duration && !isNaN(duration) && duration !== Infinity ? remainTime : playTime}</div>
        <button type='button' className={cx('controller-mute', 'controller-button')} onClick={toggleMute}>
          <img src={isMuted ? MuteIcon : VolumeIcon} alt='' />
        </button>
        {isVideo && (
          <button type='button' onClick={openFullscreen} className={cx('controller-full-screen', 'controller-button')}>
            <img src={FullScreenIcon} alt='' />
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaPlayer;
