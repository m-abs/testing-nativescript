'use strict';

import * as common from "./sound-common";

declare var NSURL: any;
declare var AVAudioPlayer: any;

export class Sound extends common.Sound {
  private url: any;

  constructor(path: string) {
    super(path);

    this.url = NSURL.fileURLWithPath(this.path);
    this.player = new AVAudioPlayer();
    this.player.initWithContentsOfURLError(this.url);
    this.player.enableRate = true;
    this.player.prepareToPlay();
  };

  play() {
    this.player.play();
  };

  pause() {
    this.player.pause();
  };

  stop() {
    this.player.stop();
  };

  isPlaying(): boolean {
    return this.player.playing;
  };

  seekTo(milis) {
    this.player.currentTime = milis / 1000;
  };

  release() {
    this.player.release();
    this.player = null;
  };

  getDuration() {
    return this.player.duration * 1000;
  };

  getCurrentPosition() {
    return this.player.currentTime * 1000;
  };

  setRate(rate) {
    console.assert(0.5 <= rate && rate <= 2);
    this.player.rate = rate;
    return this.getRate();
  };

  getRate() {
    return this.player.rate;
  };
};

export function create(path) {
  return new Sound(path);
};
