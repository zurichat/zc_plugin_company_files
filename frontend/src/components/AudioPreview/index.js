import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaUndo
} from "react-icons/fa/index";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Nav from "../Subcomponents/nav";
import Minimize from "../../../public/Icons/minimize/active.svg";

function index({ file, setOpenStatus }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [audio] = useState(new Audio(file.url));
  audio.volume = 0.1;

  function playPause() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  function muteUnmute() {
    setIsMuted(!isMuted);
    audio.muted = !audio.muted;
  }

  function forward() {
    if (audio.currentTime < audio.duration) {
      audio.currentTime += 10;
    }
  }

  function backward() {
    if (audio.currentTime > 0) {
      audio.currentTime -= 10;
    }
  }

  function restart() {
    // restart audio from the beginning
    audio.currentTime = 0;
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  }

  function setPosition(e) {
    console.log(this);
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    console.log(width, clickX, e);
    const { duration } = audio;
    audio.currentTime = (clickX / width) * duration;
  }

  useLayoutEffect(() => {
    function formatTime(seconds) {
      let minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : `0${minutes}`;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : `0${seconds}`;
      return `${minutes}:${seconds}`;
    }
    audio.addEventListener("timeupdate", () => {
      setTime(formatTime(audio.currentTime));
      setProgress((audio.currentTime / audio.duration) * 100);
    });
    console.log(time, progress, audio.volume);
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="tw-bg-gray-800 tw-bg-opacity-70 tw-overflow-auto tw-h-full tw-w-full tw-flex-auto tw-flex tw-flex-col tw-justify-between tw-pb-6 tw-fixed tw-z-30 tw-top-0 tw-left-0 tw-bottom-0 tw-right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      <div className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-h-3/4 tw-w-full">
        <div className="tw-flex tw-h-full tw-w-full md:tw-px-6 tw-px-2 tw-justify-center">
          <div className="tw-flex w-3/5 tw-items-center tw-justify-center tw-relative tw-bg-black tw-px-4 md:tw-px-48">
            <img
              src="https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2455&q=80"
              alt="music"
              className="tw-h-60 tw-w-96"
            />
            <div className="tw-absolute tw-bottom-7 tw-w-full tw-px-3">
              <div
                className="tw-bg-green-100 tw-min-w-max tw-h-1"
                onClick={(e) => setPosition(e)}
              >
                <div
                  className="tw-bg-green-400 tw-h-1"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="tw-flex tw-justify-between tw-mt-3">
                <div className="tw-flex tw-items-center">
                  {!isMuted ? (
                    <GiSpeaker
                      className="tw-text-white tw-text-xl"
                      onClick={() => muteUnmute()}
                      title="Mute"
                    />
                  ) : (
                    <GiSpeakerOff
                      className="tw-text-white tw-text-xl"
                      onClick={() => muteUnmute()}
                      title="Unmute"
                    />
                  )}
                </div>
                <div className="tw-flex tw-flex-row tw-items-center">
                  <FaUndo
                    className="tw-text-white tw-text-sm md:tw-text-xl tw-mr-2"
                    onClick={() => restart()}
                    title="Restart"
                  />
                  <FaBackward
                    className="tw-text-white tw-text-sm md:tw-text-xl hover:tw-text-green-300 tw-mr-2"
                    onClick={() => backward()}
                    title="Backward"
                  />
                  {!isPlaying ? (
                    <FaPlay
                      className="tw-text-green-500 tw-text-sm: md:tw-text-xl tw-mr-2"
                      onClick={() => playPause()}
                      title="Play"
                    />
                  ) : (
                    <FaPause
                      className="tw-text-green-500 tw-text-sm: md:tw-text-xl tw-mr-2"
                      onClick={() => playPause()}
                      title="Pause"
                    />
                  )}
                  <FaForward
                    className="tw-text-white tw-text-sm: md:tw-text-xl hover:tw-text-green-300 tw-mr-2"
                    onClick={() => forward()}
                    title="Forward"
                  />
                  <span className="tw-text-white tw-text-sm: md:tw-text-xl">
                    {time}
                  </span>
                </div>
                <div className="tw-flex tw-items-center">
                  <img src={Minimize} alt="minimize" title="minimize" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
