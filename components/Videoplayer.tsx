import React, { useEffect, useRef, MouseEvent, FC } from 'react';

interface VideoplayerProps {
  playState: boolean;
  setPlayState: (state: boolean) => void;
}

const Videoplayer: FC<VideoplayerProps> = ({ playState, setPlayState }) => {
  const player = useRef<HTMLDivElement>(null);

  const closePlayer = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setPlayState(false);
    }
  };

  useEffect(() => {
    if (playState) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playState]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center transition-opacity duration-300 ${
        playState ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        src='/assets/video.mp4'
        autoPlay
        muted
        controls
        className="w-11/12 max-w-3xl border-4 border-white"
      ></video>
    </div>
  );
};

export default Videoplayer;
