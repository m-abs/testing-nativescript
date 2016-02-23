'use strict';

import {Page} from "ui/page";
import {
  Observable, PropertyChangeData
} from "data/observable";

import * as timer from "timer";

import {Sound} from "../../shared/sound";

let myPlayer: Sound;

function zeroPadding(n: number) {
  return `00${n}`.substr(-2);
};

const data = new Observable({
  file: null,
  duration: null,
  position: null,
  playing: false,
  times(milliseconds: number): string {
    milliseconds |= 0;

    const hours = Math.floor(milliseconds / 1000 / 60 / 60);
    const minutes = Math.floor(milliseconds / 1000 / 60 - hours * 60);
    const seconds = Math.floor(milliseconds / 1000 - minutes * 60);

    return `${zeroPadding(hours)}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
  }
});

const interval = timer.setInterval(() => {
  let playing, duration, position;
  if (myPlayer) {
    playing = myPlayer.isPlaying();
    duration = myPlayer.getDuration();
    position = myPlayer.getCurrentPosition();
  }

  data.set('playing', playing);
  data.set('duration', duration);
  data.set('position', position);
}, 250);

export function pageLoaded(args) {
  const page: Page = args.object;

  page.bindingContext = data;
}

export function play() {
  if (myPlayer) {
    if (myPlayer.isPlaying()) {
      myPlayer.pause();
    } else {
      myPlayer.play();
    }

    return;
  }

  myPlayer = new Sound("~/mp3/thunder.mp3");
  myPlayer.play();
}

export function stop() {
  if (myPlayer) {
    myPlayer.stop();
    myPlayer.release();
    myPlayer = null;
  }
}

