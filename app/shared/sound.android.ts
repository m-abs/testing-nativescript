'use strict';

import * as app from "application";
import * as common from "./sound-common";

declare var android: any;

const MediaSession = android.media.session.MediaSession;
const MediaController = android.media.session.MediaController;

const MyMediaSessionCallback = MediaSession.Callback.extend({
  onMediaButtonEvent(arg) {
    console.log('onMediaButtonEvent', arg);
  },
  onPlay() {
    console.log('onPlay');
  },
  onPause() {
    console.log('onPause');
  },
  onStop() {
    console.log('onPause');
  }
});

export class Sound extends common.Sound {
  private session: any;

  constructor(path: string) {
    super(path);

    console.log('context', app.android.context);
    console.log('ms-flag', MediaSession.FLAG_HANDLES_TRANSPORT_CONTROLS);
    this.session = new MediaSession(app.android.context, 'tns-mediaplayer');
    this.session.setFlags(MediaSession.FLAG_HANDLES_MEDIA_BUTTONS | MediaSession.FLAG_HANDLES_TRANSPORT_CONTROLS);
    this.session.setCallback(new MyMediaSessionCallback);
    this.session.setActive(true);

    this.player = android.media.MediaPlayer.create(app.android.context, android.net.Uri.parse(this.path));
  };

  play() {
    this.player.start();
  };

  pause() {
    this.player.pause();
  };

  stop() {
    this.player.stop();
  };

  isPlaying(): boolean {
    return this.player.isPlaying();
  };

  seekTo(milis) {
    this.player.seekTo(milis);
  };

  release() {
    this.player.release();
    this.player = null;
  };

  getDuration() {
    return this.player.getDuration();
  };

  getCurrentPosition() {
    return this.player.getCurrentPosition();
  };

  setRate(rate: number) {
    console.warn('Cannot set Sound.rate on Android.');
    return 1;
  };

  getRate() {
    return 1;
  };
};

export function create(path) {
  return new Sound(path);
};
